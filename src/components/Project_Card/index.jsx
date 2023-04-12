import React from "react";
import Style from "./ProjectCard.module.css";
const ProjectCard = ({ name, description, link }) => {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={Style.bar}></div>
        <div className={Style.box}>
          <div className={Style.header}>
            <h2>{name}</h2>
          </div>
          <p className={Style.grey}>{description}</p>
          <a href={link} className={Style.link}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
