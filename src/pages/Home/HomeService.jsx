import React from "react";
import { FaPenFancy, FaBox, FaGetPocket } from "react-icons/fa";
import ServiceRow from "./ServiceRow";

const HomeService = () => {
  const services = [
    {
      id: "01",
      step: "STEP 1",
      ICON: FaPenFancy,
      title1: "design and",
      title2: "drawings",
      des: "The first step in turning your dream into a physical product is the design phase.",
    },
    {
      id: "02",
      step: "STEP 2",
      ICON: FaBox,
      title1: "simple",
      title2: "production",
      des: "We move on to making a physical product that you can hold and test.",
    },
    {
      id: "03",
      step: "STEP 3",
      ICON: FaGetPocket,
      title1: "quantity ",
      title2: "production",
      des: "Once you’ve approved your sample product,we move onto final production. ",
    },
  ];

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:px-10 px-10 bg-base-100 my-10">
        {services.map((service) => {
          return <ServiceRow key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default HomeService;
