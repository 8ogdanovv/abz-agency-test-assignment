import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Input.css';

const Input = ({
  title,
  placeholder,
  showError,
  errorMessage,
  hintMessage,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(showError);

  const errorEmit = () => {
    setError(true);

    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (error) {
      errorEmit();
    }
  }, [error]);

  useEffect(() => {
    setFilled(inputValue !== '');
  }, [inputValue]);

  const handleFocus = (e) => {
    e.preventDefault();

    setFocused(true);

    if (placeholder === inputValue) {
      setInputValue('');
    }
  };

  const handleBlur = () => {
    setFocused(false);

    if (inputValue === '') {
      setInputValue(placeholder);
    }
  };

  return (
    <div className={classNames('input-container')}>
      <div
        className={classNames('title', { 'error-title': error }, { 'title-focused': focused })}
      >
        {title}
      </div>

      <label
        className={classNames('input-label', { 'error-field': error })}
      >
        <input
          className={classNames(
            'input p1',
            { filled },
          )}
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>
      {error && <p className="error">{errorMessage}</p>}
      {!error && focused && <p className="hint">{hintMessage}</p>}
    </div>
  );
};

export default Input;
