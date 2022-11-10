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
              <i className="fas fa-phone"></i> &nbsp; +254 708 237 821
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
        <span id="footer-sign">
          Developed by Tonny &copy; 2022
        </span>
      </div>
    </div>
  );
}

export default Footer;
