import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import { config as configuration } from "../Contact/Form/Config.js";

import React from "react";

import "../Contact/Contact.css";

const MainPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact config={configuration} />
    </>
  );
};

export default MainPage;
