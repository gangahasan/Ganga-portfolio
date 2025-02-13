import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import projectImage1 from "../assets/projectTastyTrailLandingPage.png";
import projectImage2 from "../assets/projectTastyTrailLandingPage.png";
import "../styles/projects.css"

const projects = [
  {
    id: 1,
    title: "Food Delivered App",
    description:
      "A responsive dashboard with real-time analytics and inventory management features.",
    image: projectImage1,
    liveLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: projectImage2,
    liveLink: "https://example.com",
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
