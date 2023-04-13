import React from "react";
import Style from "./Projects.module.css";
import { ProjectCard } from "../../components/Card";
const Projects = () => {
  return (
    <div id="Projects" className={Style.project}>
      <div>
        <p className={Style.subtitle}>Here's My</p>
        <p className={Style.title}>Projects</p>
      </div>
      <div className={Style.gridContainer}>
        <ProjectCard
          name="KYC Sharing System"
          description="Decentralized App build using React,Blockchain,Node,Mongodb"
          link="https://github.com/aayussraut/Decentralized-KYC-Sharing-System.git"
        />
        <ProjectCard
          name="Covid Update"
          description="Flutter application that fetch data from api and provides real time covid update"
          link="https://github.com/aayussraut/COVID-update.git"
        />
        <ProjectCard
          name="Quiz App"
          description="Flutter application that fetch question from api"
          link="https://github.com/aayussraut/quizapp.git"
        />
        <ProjectCard
          name="Simple User Mgmt System"
          description="Node and ejs application "
          link="https://github.com/aayussraut/user-management-system.git"
        />
      </div>
      {/* <h1>Projects</h1> */}
    </div>
  );
};
export default Projects;
