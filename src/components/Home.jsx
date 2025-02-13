import React from "react";
import "../styles/home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
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
        <button className="button">Resume</button>
      </div>
      <div className="leftcont">
        <img
          src={profileImage}
          width="400px"
          height="400px"
          alt="profileImage"
          className="profileImage"
          style={{ borderRadius: "50%",border:"10px solid white" }}
        />
      </div>
    </div>
  );
};

export default Home;
