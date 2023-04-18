import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import "./index.css";
const Header = () => {
  const [viewPortWidth, setViewPortWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  return (
    <div className="Header">
      <nav>
        <Logo />
        <Menu
          isMenuOpen={isMenuOpen}
          viewPortWidth={viewPortWidth}
          toggleMenu={toggleMenu}
        />
        {/* <h1>Header</h1> */}
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
