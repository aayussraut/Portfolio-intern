import React from "react";
import Style from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={`${Style.logo}`}>
      <h1>Aayush </h1>
      <span className={Style.span}>
        <h1>Raut</h1>
      </span>
    </div>
  );
};

export default Logo;
