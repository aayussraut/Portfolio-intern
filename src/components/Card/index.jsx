import React from "react";
import Style from "./Card.module.css";

import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className={Style.container}>
      <div className={Style.projectCard}>
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

const AboutPageCard = ({ title, description }) => {
  return (
    <div>
      <p className={Style.aboutCardFieldName}>{title}</p>
      <p className={Style.aboutCardValue}>{description}</p>
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
