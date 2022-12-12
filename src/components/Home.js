import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";

function Home({ handleClick }) {
  return (
    <>
      <LandingPage handleClick={handleClick} />
      <About />
      <Contact />

    </>
  );
}

export default Home;
