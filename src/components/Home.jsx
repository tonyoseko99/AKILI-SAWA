import React from "react";
import LandingPage from "./LandingPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

function Home({ handleClick }) {
  return (
    <>
      <LandingPage handleClick={handleClick} />
      <AboutPage />
      <ContactPage />

    </>
  );
}

export default Home;
