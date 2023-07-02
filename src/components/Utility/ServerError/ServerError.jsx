import React, { useEffect } from 'react';
import './ServerError.css';

const ServerError = ({ serverError, setServerError, showingDurationMS }) => {

  useEffect(() => {
    setTimeout(() => {
      setServerError('');
    }, showingDurationMS);
  }, []);

  return (
    <div className='server-error text-body'>{serverError}</div>
  )
}

export default ServerError