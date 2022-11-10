import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <h2 className="logo-text">
          <span>Contact</span> Us
        </h2>
        <div className="footer-section about" id="footer-details">
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; +254 700 000 000
            </span><br />
            <span>
              <i className="fas fa-envelope"></i> &nbsp; akilisawa@mental.com
            </span><br />
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a><br />
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a><br />
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a><br />
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
