import React from "react";
import HomeCard from "../Home/HomeCard";
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
    </>
  );
};

export default Service;
