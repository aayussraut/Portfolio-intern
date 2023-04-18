import React, { useEffect, useState } from "react";
import Style from "./Projects.module.css";
import { ProjectCard } from "../../components/Card";
import data from "../../data/data.json";
const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const projectData = data[0].projectList;
    setProjectList(projectData);
  }, []);
  return (
    <div id="Projects" className={Style.project}>
      <div>
        <p className={Style.subtitle}>Here's My</p>
        <p className={Style.title}>Projects</p>
      </div>
      <div className={Style.gridContainer}>
        {projectList.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              name={item.name}
              description={item.description}
              link={item.link}
              image={item.image}
            />
          );
        })}
      </div>
      {/* <h1>Projects</h1> */}
    </div>
  );
};
export default Projects;
