import React from "react";
import { FiDownload } from "react-icons/fi"; // Import download icon

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "60px",
      }}
    >
      {/* <button
        style={{
          backgroundColor: "#4F46E5",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <a
          href="https://drive.google.com/file/d/1RX9oO6S6I1r2JMhGSyI2GvWO8suTKTUv/view"
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <FiDownload size={20} />
        </a>
      </button> */}
    </div>
  );
};

export default Resume;
