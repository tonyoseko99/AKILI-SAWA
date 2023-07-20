function LandingPage({ handleClick }) {
  return (
    <>
      <div className="home" id="home">
        <div className="home-content">
          <h1>AKILI SAWA</h1>
          <p>Make Your Mental Health A Priority</p>

          <button className="btn btn-dark" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
