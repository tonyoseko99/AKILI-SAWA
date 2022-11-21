import react from "react";
import { NavLink } from "react-router-dom";

function Navigation({ handleClick }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        AKILI SAWA
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/assessment">
              Assessment
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
        <button class="btn btn-dark" onClick={handleClick} >Get Started</button>
      </div>
    </nav>
  );
}

export default Navigation;
