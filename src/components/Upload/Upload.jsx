import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Upload.css';

const Upload = ({ onUpload, showError, errorMessage }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(showError);

  const errorEmit = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (onUpload) {
        onUpload(file);
        setFileName(file.name);
        setFilled(true);
      } else {
        errorEmit();
      }
    } else {
      // If file is not selected, reset the state and show error
      setFileName('Upload your photo');
      setFilled(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      errorEmit();
    }
  }, [error]);

  return (
    <div
      className={classNames('upload-container input-field', {
        'error-field': error,
      })}
    >
      <label className={classNames('upload-label')}>
        <div className={classNames('label', { filled, 'error-field': error })}>
          Upload
        </div>
        <input type="file" onChange={handleUpload} style={{ display: 'none' }} />
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
