import React from "react";
import "./Button.css";
import classNames from "classnames";
import Preloader from "../Preloader/Preloader";

const Button = ({ title, handleClick, disabled, isLoading }) => {
  return (
    <button
      className={classNames("button", { disabled })}
      onClick={handleClick}
      disabled={disabled}
    >
      {!isLoading ? title : <Preloader speedMS={400} />}
    </button>
  );
};

export default Button;
