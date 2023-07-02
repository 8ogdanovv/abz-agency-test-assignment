import './Users.css';
import React, { useEffect, useState, useCallback } from 'react';
import User from '../../Utility/User/User';
import Button from '../../Utility/Button/Button';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

const Users = ({ fetchedData, setFetchedData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageLink, setNextPageLink] = useState(null);
  const [isFirstPageFetched, setIsFirstPageFetched] = useState(false);

  useEffect(() => {
    fetchFirstPage();
  }, []);

  const isNextPage = useCallback(({ total_pages, page }) => {
    return total_pages > page;
  }, []);

  const handleSetNextPage = useCallback((data) => {
    if (isNextPage(data)) {
      setNextPageLink(data.links.next_url);
    } else {
      setNextPageLink(null);
    }
  }, [isNextPage]);

  const fetchFirstPage = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?page=1&count=6`);
      const data = await response.json();

      setFetchedData(data.users);
      handleSetNextPage(data);
      setIsFirstPageFetched(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }, [setFetchedData, handleSetNextPage]);

  const fetchNextPage = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(nextPageLink);
      const data = await response.json();

      setFetchedData(prevData => [...prevData, ...data.users]);
      handleSetNextPage(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }, [nextPageLink, setFetchedData, handleSetNextPage]);

  const handleShowMore = useCallback(() => {
    if (isFirstPageFetched && nextPageLink) {
      fetchNextPage();
    }
  }, [isFirstPageFetched, nextPageLink, fetchNextPage]);

  return (
    <div className="section users-flex block" id="users-page">
      <p className="text-title">Working with GET request</p>
      <div className="users-grid">
        {fetchedData.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>

      {nextPageLink && (
          <Button
            id="show-more"
            title="Show more"
            handleClick={handleShowMore}
            isLoading={isLoading}
          />
      )}
    </div>
  );
};

export default React.memo(Users);
