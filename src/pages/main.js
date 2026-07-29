import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
import AIAvatar from "./AIAvatar";
import About from "./About";
import Letsconnect from "./Letsconnect";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="pt-20">
      <Element name="Home" className="element">
        <Home />
      </Element>
      <Element name="ai-avatar" className="element">
        <AIAvatar />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>
      <Element name="skills" className="element py-16 bg-white">
        <Skills />
      </Element>
      <Element name="letsconnect" className="element">
        <Letsconnect />
      </Element>
    </div>
  );
};

export default Main;
