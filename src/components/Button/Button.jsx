import React from 'react';
import './Button.css';

const Button = ({ title, handleClick, disabled = false }) => {
  return (
    <button className='button' onClick={handleClick} disabled={disabled} >{title}</button>
  )
}

export default Button;