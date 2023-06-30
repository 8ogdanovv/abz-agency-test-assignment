import React from "react";
import spinner from "../../../assets/spinner.svg";
import "./Preloader.css";

const Preloader = ({ speed }) => {
  const styleBlock = {
    "--speed": `${speed}ms`,
  };

  return (
    <div className="spinner-container" style={styleBlock} data-speed={speed}>
      <img src={spinner} alt="preloader" />
    </div>
  );
};

export default Preloader;
