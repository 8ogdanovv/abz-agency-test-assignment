import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Upload.css';

const Upload = ({ onUpload, showError }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState(showError);

  const errorEmit = () => {
    setError(true);

    setTimeout(() => {
      setError(false)
    }, 2500);
  }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    // Perform actions with the uploaded file
    if (onUpload) {
      onUpload(file);
      setFileName(file.name);
      setFilled(true);
    } else {
      errorEmit();
    }
  };

  useEffect(() => {
    if (error) {
      errorEmit();
    }
  }, [error]);

  return (
    <div
      className={
        classNames(
          'upload-container input-field',
        )
      }
    >

      <label
        className={
          classNames(
            'upload-label',
            { 'error-field': error },
          )
        }
      >
        <div
          className={
            classNames(
              'label',
              { filled },
              { 'error-field': error },
            )}
        >
          Upload
        </div>

        <input
          type="file"
          onChange={handleUpload}
          style={{ display: 'none' }}
        />

        <div
          className={
            classNames(
              'placeholder p1',
              { filled },
              { 'error-field': error },
            )}
        >
          {fileName}
        </div>
      </label>

      {error && (<p className="error">Error uploading file</p>)}
    </div>
  );
};

export default Upload;
