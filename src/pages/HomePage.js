import React from "react";
import LandingPage from "../components/LandingPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

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