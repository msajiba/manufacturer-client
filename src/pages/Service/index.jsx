import React from "react";
import HomeCard from "../Home/HomeCard";
import Footer from "../Shared/Footer";
import ServiceCapability from "./ServiceCapability";
import ServiceCount from "./ServiceCount";
import ServiceDo from "./ServiceDo";

const Service = () => {
  return (
    <>
      <HomeCard />
      <ServiceCapability />
      <ServiceDo />
      <ServiceCount />
      <Footer />
    </>
  );
};

export default Service;
