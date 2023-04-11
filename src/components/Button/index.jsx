import React from "react";
import Style from "./Button.module.css";
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>My CV</button>;
};

export default Button;
