function Navigation({ handleClick }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light flex justify-between drop-shadow-md"
        id="navbar-main"
      >
        <a className="navbar-brand" href="/">
          AKILI SAWA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/motivations">
                Daily Motivation
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/assessment">
                Self-Assessment
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-dark" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
