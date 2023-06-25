import React, { useState } from 'react';
import classNames from 'classnames';
import './Input.css';

const Input = ({
  title,
  placeholder,
  showError,
  errorMessage,
  onChange,
  onBlur,
  hintMessage,
  value,
}) => {
  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleInput = (e) => {
    onChange(e);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleFieldBlur = () => {
    setFocused(false);
    setFilled(value !== '');
    onBlur();
  };

  return (
    <div className={classNames('input-container')}>
      <div className={classNames('title', { 'title-focused': focused })}>
        {title}
      </div>

      <label className={classNames('input-label', { 'error-field': (showError && !focused) })}>
        <input
          className={classNames('input p1', { filled })}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleFieldBlur}
        />
      </label>

      {showError && !focused && <p className="error">{errorMessage}</p>}
      {focused && <p className="hint">{hintMessage}</p>}
      {!showError && !focused && <p className="hint">&nbsp;</p>}
    </div>
  );
};

export default Input;