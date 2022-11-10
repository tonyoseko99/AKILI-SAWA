import react from "react";

function Navigation({ handleClick }) {
  return (
    <div className="navigation" id="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#home">
          AKILI SAWA
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Our Partners
              </a>
            </li>
          </ul>
          <ul className="navbar-nav" id="navbar-nav">
            <li className="nav-item" id="get-started-btn">
                <button className="btn btn-dark" onClick={handleClick} >Get Started</button>
            </li>
          </ul>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
