import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Upload.css';

const Upload = ({ onUpload, showError, errorMessage }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(showError);

  useEffect(() => {
    setError(showError);
  }, [showError]);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (onUpload) {
        onUpload(file);
        setFileName(file.name);
        setFilled(true);
        setError(false); // Reset the error state on successful upload
      } else {
        setFileName('Upload your photo');
        setFilled(false);
        setError(true);
      }
    } else {
      // If file is not selected, reset the state and show error
      setFileName('Upload your photo');
      setFilled(false);
      setError(true);
    }
  };

  return (
    <div
      className={classNames('upload-container input-field')}
    >
      <label className={classNames('upload-label', {
        'error-field': error,
      })}>
        <div className={classNames('label', { filled: filled && !error, 'error-field': error })}>
          Upload
        </div>
        <input type="file" onChange={handleUpload} aria-label="photo upload" style={{ display: 'none' }} />
        <div
          className={classNames('placeholder p1', { filled, 'error-field': error })}
        >
          {fileName}
        </div>
      </label>
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Upload;
