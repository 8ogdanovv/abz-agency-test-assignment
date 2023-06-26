import React from 'react';
import './Button.css';
import classNames from 'classnames';

const Button = ({ title, handleClick, disabled }) => {
  return (
    <button
      className={classNames('button', { disabled })}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button;