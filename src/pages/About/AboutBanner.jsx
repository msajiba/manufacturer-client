import React from "react";
import img from "../../assets/service/service5.jpeg";

const AboutBanner = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-20  bg-base-100 py-10 ">
      <div className="md:ml-16 ">
        <img src={img} className=" md:w-96 md:h-80  rounded-lg shadow-2xl" />
      </div>
      <div className=" md:px-16 px-5">
        <h1 className="md:text-5xl font-bold"> Welcome </h1>
        <p className="md:pt-6 text-justify">
          Textile is a global non-profit that works closely with our members to
          drive industry transformation in preferred fibers, integrity and
          standards and responsible supply networks. We identify and share best
          practices regarding farming, materials, processing, traceability and
          product end-of-life in order to reduce the textile industry’s impact
          on the world’s water, soil and air, and the human population.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
