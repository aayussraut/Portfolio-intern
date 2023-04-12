import React from "react";
import Style from "./SkillCard.module.css";

const SkillCard = ({ skill, icon }) => {
  return (
    <div className={`${Style.skillCard}`}>
      {icon}
      <br />
      <h2>{skill}</h2>
    </div>
  );
};

export default SkillCard;
