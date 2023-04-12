import React from "react";
import Style from "./Button.module.css";
import Aayush_CV from "../../../public/Aayush_CV.pdf";
const Button = ({ name, onClick }) => {
  const value = name;
  return (

    <button
      onClick={onClick}
      className={name === "My CV" ? Style.button : Style.button2}
    >
      {name === "My CV" ? (
        <a href="/Aayush_CV.pdf" download="Aayush_CV" target="_blank" style={{ textDecoration: "none", color: "white" }}>
          My CV
        </a>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
