import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 style={{ color: "rgb(78, 78, 249)", fontSize: "28px" }}>Ganga</h1>
      <ul className="listitems">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
