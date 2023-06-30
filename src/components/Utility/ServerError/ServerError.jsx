import React, { useEffect } from 'react';
import './ServerError.css';

const ServerError = ({ serverError, setServerError, timeOut }) => {

  useEffect(() => {
    setTimeout(() => {
      setServerError('');
    }, timeOut);
  }, []);

  return (
    <div className='server-error text-body'>{serverError}</div>
  )
}

export default ServerError