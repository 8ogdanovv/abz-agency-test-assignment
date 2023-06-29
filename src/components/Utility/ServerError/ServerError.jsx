import React, { useEffect } from 'react';
import './ServerError.css';

const ServerError = ({ serverError, setServerError, timeOut }) => {

  useEffect(() => {
    setTimeout(() => {
      setServerError('');
    }, timeOut);
  }, []);

  return (
    <div className='server-error p1'>{serverError}</div>
  )
}

export default ServerError