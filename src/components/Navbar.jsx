import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 style={{ color: "rgb(78, 78, 249)", fontSize: "28px" }}>Ganga</h1>

      {/* Hamburger Icon (Only for Small Screens) */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`listitems ${isOpen ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About Me
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
