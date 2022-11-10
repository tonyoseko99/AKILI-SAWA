import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>AKILI</span> SAWA
          </h1>
          <p>
            Akili Sawa is a mental health awareness and advocacy platform that
            aims to promote mental health awareness and destigmatize mental
            health issues in Kenya.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; +254 700 000 000
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp; tonnyseko@gmail.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
