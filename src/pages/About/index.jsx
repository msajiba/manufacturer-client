import React from "react";
import Footer from "../Shared/Footer";
import AboutBanner from "./AboutBanner";
import AboutLocation from "./AboutLocation";
import AboutLoop from "./AboutLoop";
import AboutTeam from "./AboutTeam";

const About = () => {
  return (
    <>
      <AboutBanner />
      <AboutLoop />
      <AboutTeam />
      <AboutLocation />
      <Footer />
    </>
  );
};

export default About;
