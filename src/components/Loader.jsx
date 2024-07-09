import React from "react";
import star from "../assets/dstar.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={star} alt="" className="spinner opacity-60" />
    </div>
  );
};

export default Loader;
