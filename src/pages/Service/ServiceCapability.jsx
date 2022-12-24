import React from "react";
import img from "../../assets/service/service4.jpeg";

const ServiceCapability = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20 text-center bg-base-100 py-10">
        <div className="pt-10 md:px-16 px-5 text-left">
          <h1 className="md:text-5xl font-bold">Our Capabilities</h1>
          <p className="md:pt-6">
            Stop by today; our talented staff will be happy to help
          </p>
          <p className="pb-6">you find what you’re searching for!</p>
          <p className="md:py-4">CEO: Steven Rogers</p>
        </div>
        <div className="md:ml-44">
          <img src={img} className=" md:w-96 md:h-80  rounded-lg shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default ServiceCapability;
