import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
const App = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Header />
      {/* <SocialMedia />
      <br />
      <Button />
      <br />
      <br />
      <ProjectCard />
      <br />
      <SkillCard />
      <br />
      <Form /> */}
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
