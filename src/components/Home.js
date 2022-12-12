import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";

function Home({ handleClick }) {
  return (
    <>
      <LandingPage handleClick={handleClick} />
      <About />

    </>
  );
}

export default Home;
