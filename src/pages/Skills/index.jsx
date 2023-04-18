import React, { useEffect, useState } from "react";

import Style from "./Skills.module.css";
import { SkillCard } from "../../components/Card";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
const Skills = () => {
  const skill = [
    { skill: "HTML", icon: <FaHtml5 size={50} /> },
    { skill: "CSS", icon: <FaCss3 size={50} /> },
    { skill: "JavaScript", icon: <DiJavascript1 size={50} /> },
    { skill: "React.js", icon: <FaReact size={50} /> },
    { skill: "Node.js", icon: <FaNodeJs size={50} /> },
  ];
  return (
    <div id="Skills" className={Style.skillPage}>
      <div>
        <p className={Style.subtitle}>What I Know</p>
        <p className={Style.title}>
          My <span style={{ color: "#4bc1ce" }}> Skills</span>
        </p>
      </div>
      <div className={`${Style.skillCard}  ${Style.item} `}>
        {skill.map((item) => {
          return (
            <SkillCard skill={item.skill} icon={item.icon} />
            // <h1>hi</h1>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
