import React from "react";
import "../styles/skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiChakraui,
  SiNetlify,
  SiVercel,
  SiOpenai,
  SiAdobe,
} from "react-icons/si";
import { MdSpeed, MdOutlineTipsAndUpdates } from "react-icons/md";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" /> },
  { name: "React", icon: <FaReact className="skill-icon react" /> },
  { name: "Redux", icon: <SiRedux className="skill-icon redux" /> },
  { name: "Chakra UI", icon: <SiChakraui className="skill-icon chakra" /> },
  { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
  { name: "Netlify", icon: <SiNetlify className="skill-icon netlify" /> },
  { name: "Vercel", icon: <SiVercel className="skill-icon vercel" /> },
  { name: "ChatGPT", icon: <SiOpenai className="skill-icon chatgpt" /> },
];

const otherSkills = [
  { name: "Clean Code", icon: <FaCode className="skill-icon clean-code" /> },
  { name: "UI/UX Design", icon: <SiAdobe className="skill-icon uiux" /> },
  {
    name: "Web Performance",
    icon: <MdSpeed className="skill-icon performance" />,
  },
  {
    name: "Problem Solving",
    icon: <MdOutlineTipsAndUpdates className="skill-icon problem-solving" />,
  },
];

const Skills = () => {
  return (
    <div className="skillcont">
      <h1 className="skill-title">Skills</h1>
      <p className="skill-description">
        A comprehensive toolkit that enables me to create modern, responsive,
        and user-friendly web applications.
      </p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="other-skills-container">
        {otherSkills.map((skill, index) => (
          <div key={index} className="other-skill-item">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
