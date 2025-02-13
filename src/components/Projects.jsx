import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import projectImage1 from "../assets/projectTastyTrailLandingPage.png";
import projectImage2 from "../assets/project2screenshot.png";
import "../styles/projects.css"

const projects = [
  {
    id: 1,
    title: "Food Delivered App",
    description:
      "A responsive dashboard with real-time analytics and inventory management features.",
    image: projectImage1,
    liveLink: "https://gangahasan.github.io/Tasty-Trail/",
    codeLink: "https://github.com/gangahasan/Tasty-Trail",
  },
  {
    id: 2,
    title: "User Dashboard",
    description:
      "User dashboard with real-time analytics and inventory management features",
    image: projectImage2,
    liveLink: "https://react-fb-dash-ganga.vercel.app/",
    codeLink: "https://github.com/example",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Featured Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo"
                >
                  <FaGlobe className="icon" /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-code"
                >
                  <FaGithub className="icon" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
