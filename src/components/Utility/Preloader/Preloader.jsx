import React from "react";
import spinner from "../../../assets/spinner.svg";
import "./Preloader.css";

const Preloader = React.memo(({ speedMS }) => {
  const styleBlock = {
    "--speed": `${speedMS}ms`,
  };

  return (
    <div className="spinner-container" style={styleBlock} >
      <img src={spinner} alt="preloader" />
    </div>
  );
});

export default Preloader;
