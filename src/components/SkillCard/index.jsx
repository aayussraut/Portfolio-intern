import React from "react";
import { FaReact } from "react-icons/fa";
import Style from "./SkillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <div className={`${Style.skillCard}`}>
      <FaReact size={30} />
      <h2>React</h2>
    </div>
  );
};

export default SkillCard;
