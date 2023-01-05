import React from "react";
import Footer from "../Shared/Footer";
import ServiceCapability from "./ServiceCapability";
import ServiceCount from "./ServiceCount";
import ServiceDo from "./ServiceDo";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <>
      <ServiceItem />
      <ServiceCapability />
      <ServiceDo />
      <ServiceCount />
      <Footer />
    </>
  );
};

export default Service;
