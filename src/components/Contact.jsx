import React from "react";
import "../styles/contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Get in Touch</h1>
      <div className="contact-container">
        <div className="contacts">
          <div className="contact-item">
            <div>
              <FaEnvelope className="contact-icon" />
            </div>
            <div className="link">
              <h5>Email</h5>
              <a href="mailto:rgangabhavani2@gmail.com">
                rgangabhavani2@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <FaPhoneAlt className="contact-icon" />
            </div>
            <div className="link">
              <h5>Phone</h5>
              <a href="#">+91 9701561861</a>
            </div>
          </div>
          <div className="contact-item">
            <div>
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <div>
              <h5>Location</h5>
              <p>Visakhapatnam, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="livesites">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
