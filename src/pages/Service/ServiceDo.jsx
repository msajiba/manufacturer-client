import React from "react";
import img from "../../assets/service/service1.jpeg";

const ServiceDo = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-20  bg-base-100 py-10 ">
      <div className="md:ml-16 ">
        <img src={img} className=" md:w-96 md:h-80  rounded-lg shadow-2xl" />
      </div>
      <div className=" md:px-16 px-5">
        <h1 className="md:text-5xl font-bold">How we do it</h1>
        <p className="md:pt-6 text-justify">
          Textile engages and catalyzes the textile industry across the supply
          chain through partnerships and collaborations, building knowledge and
          capacity to inform and educate. We further leverage our influence to
          create action, change and collective impact.
        </p>
        <p className="py-6 text-justify">
          Textile inspires and equips people to accelerate sustainable practices
          in the textile value chain. We focus on minimizing the harmful impacts
          of the global textile industry and maximizing its positive effects.
        </p>
      </div>
    </div>
  );
};

export default ServiceDo;
