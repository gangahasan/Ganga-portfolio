import React from "react";
import "../styles/home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  const handleResumeClick = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Ganga_Bhavani_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="righttcont">
        <h1 style={{ fontSize: "4rem" }}>
          Front-End <br />
          <span style={{ color: "#4F46E5" }}>Web Developer</span>
        </h1>
        <p style={{ fontSize: "20px", paddingTop: "5px", color: "#4B5563" }}>
          Crafting beautiful and responsive web experiences with modern
          technologies
        </p>
        <button className="button" onClick={handleResumeClick}>
          Resume
        </button>
      </div>
      <div className="leftcont">
        <img
          src={profileImage}
          width="400px"
          height="400px"
          alt="profileImage"
          className="profileImage"
          style={{ borderRadius: "50%", border: "10px solid white" }}
        />
      </div>
    </div>
  );
};

export default Home;
