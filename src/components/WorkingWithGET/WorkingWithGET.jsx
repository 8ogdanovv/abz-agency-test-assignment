import './WorkingWithGET.css';
import React, { useEffect, useState } from 'react';
import User from '../User/User';
import Button from '../Button/Button';

const API_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

const WorkingWithGET = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageLink, setNextPageLink] = useState(null);
  const [isFirstPageFetched, setIsFirstPageFetched] = useState(false);

  useEffect(() => {
    fetchFirstPage();
  }, []);

  const fetchFirstPage = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?page=1&count=6`);
      const data = await response.json();

      setFetchedData(data.users);
      setNextPageLink(data.links.next_url);
      setIsFirstPageFetched(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNextPage = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(nextPageLink);
      const data = await response.json();

      setFetchedData(prevData => [...prevData, ...data.users]);
      setNextPageLink(data.links.next_url);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    if (isFirstPageFetched && nextPageLink) {
      fetchNextPage();
    }
  };

  return (
    <div className="section users-flex block">
      <p className="h1">Working with GET request</p>
      <div className="users-grid">
        {fetchedData.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        nextPageLink && <Button title="Show more" handleClick={handleShowMore} />
      )}
    </div>
  );
};

export default WorkingWithGET;
