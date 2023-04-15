import React from "react";
import Style from "./Button.module.css";
const Button = ({ name, onClick }) => {
  const value = name;
  return (
    <button
      onClick={onClick}
      className={name === "My CV" ? Style.button : Style.button2}
    >
      {name === "My CV" ? (
        <a
          href="/Aayush_CV.pdf"
          download="Aayush_CV"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          My CV
        </a>
      ) : (
        <a
          href="#ContactForm"
          style={{ textDecoration: "none", color: "grey" }}
        >
          Hire Me
        </a>
      )}
    </button>
  );
};

export default Button;
