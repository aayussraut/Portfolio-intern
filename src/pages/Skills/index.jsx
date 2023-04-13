import React from "react";

import Style from "./Skills.module.css";
import { SkillCard } from "../../components/Card";

import { FaReact, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
const Skills = () => {
  return (
    <div id="Skills" className={Style.skillPage}>
      <div>
        <p className={Style.subtitle}>What I Know</p>
        <p className={Style.title}>
          My <span style={{ color: "#4bc1ce" }}> Skills</span>
        </p>
      </div>
      <div className={Style.skillCard}>
        <SkillCard skill="HTML" icon={<FaHtml5 size={50} />} />
        <SkillCard skill="CSS" icon={<FaCss3 size={50} />} />
        <SkillCard skill="JavaScript" icon={<DiJavascript1 size={50} />} />
        <SkillCard skill="React.js" icon={<FaReact size={50} />} />
        <SkillCard skill="Node.js" icon={<FaNodeJs size={50} />} />
      </div>
    </div>
  );
};

export default Skills;
