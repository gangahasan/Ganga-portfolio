import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="portfoliopage">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section id="resume">
        <Resume />
      </section> */}
      <Footer />
    </div>
  );
};

export default App;
