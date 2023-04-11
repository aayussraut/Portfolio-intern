import React from "react";
import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import Button from "./components/Button";
import ProjectCard from "./components/Project_Card";
import SkillCard from "./components/SkillCard";
const App = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Header />
      <SocialMedia />
      <Button />
      <ProjectCard />
      <SkillCard />
    </div>
  );
};

export default App;
