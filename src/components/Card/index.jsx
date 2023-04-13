import React from "react";
import Style from "./Card.module.css";

import { FaGithub } from "react-icons/fa";

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
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, icon }) => {
  return (
    <div className={`${Style.skillCard}`}>
      {icon}
      <br />
      <h2>{skill}</h2>
    </div>
  );
};

const AboutPageCard = ({ fieldName, value }) => {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#4bc1ce",
          margin: "0px",
        }}
      >
        {fieldName}
      </p>
      <p style={{ fontSize: "20px", color: "grey", margin: "0px" }}>{value}</p>
    </div>
  );
};

const SocialMediaCard = ({ link, icon }) => {
  return (
    <div className={Style.social}>
      <div className={Style.logo}>
        <a className={Style.socialLink} href={link}>
          {icon}
        </a>
      </div>
    </div>
  );
};

export { ProjectCard, SkillCard, AboutPageCard, SocialMediaCard };
