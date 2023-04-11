import React from "react";
import Style from "./ProjectCard.module.css";
const ProjectCard = () => {
  return (
    <div className={Style.card}>
      <div className={Style.bar}></div>
      <div className={Style.box}>
        <div className={Style.header}>
          <h2>Project Name</h2>
        </div>
        <p className={Style.grey}>Project Description</p>
        <a href="" className={Style.grey}>
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
