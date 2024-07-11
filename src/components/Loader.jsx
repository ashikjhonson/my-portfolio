import React from "react";
import logo from "../assets/logo.jpg";
import star from "../assets/dstar.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logo} alt="" className="h-32 scale-150 animate-pulse" />
      <img src={star} alt="" className="spinner max-sm:mb-10" />
    </div>
  );
};

export default Loader;
