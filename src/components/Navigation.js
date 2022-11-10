import react from "react";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
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
            <a class="nav-link" href="#">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
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
            <a className="nav-link" href="https://docs.google.com/forms/d/1H-Golp0EOn0XpvSY8us-0CRMuxWTXERf8t9JPDrrjLs/edit?ts=614b0326">
                <button className="btn btn-dark">Get Started</button>
            </a>
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
  );
}

export default Navigation;
