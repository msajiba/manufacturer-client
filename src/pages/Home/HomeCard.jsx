import React from "react";
import service1 from "../../assets/service/service1.jpeg";
import service2 from "../../assets/service/service2.jpeg";
import service3 from "../../assets/service/service3.jpeg";
import service4 from "../../assets/service/service4.jpeg";
import service5 from "../../assets/service/service5.jpeg";
import service6 from "../../assets/service/service6.jpeg";
import CardRow from "./CardRow";

const HomeCard = () => {
  const services = [
    {
      id: "01",
      title: "Leather Prototype Development",
      main: "We can help design your project",
      img: service1,
    },
    {
      id: "02",
      title: "Contract Cutting and Sewing",
      main: "No project is too small, nor too large.",
      img: service2,
    },
    {
      id: "03",
      title: "Leather Belt Manufacturing",
      main: "We specialize in handcrafting the finest belts in the USA.",
      img: service3,
    },
    {
      id: "04",
      title: "Custom Case Manufacturing",
      main: "Synthetic or leather, Manufacturer Textiles has the experience",
      img: service4,
    },
    {
      id: "05",
      title: "Corporate Gifts and Accessories",
      main: "Use quality leather gifts to elevate your brand.",
      img: service5,
    },
    {
      id: "06",
      title: "Private Label Production",
      main: "Leaders of industry trust Manufacturer Textiles with their brand, shouldn’t you?",
      img: service6,
    },
  ];

  return (
    <div className="w-full">
      <div className=" mx-10 my-5">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="divider my-14 text-center uppercase text-4xl  text-secondary
        font-serif"
        >
          <p>service</p>
        </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {services.map((service) => {
              return <CardRow key={service.id} service={service} />;
            })}
          </div>
      </div>
    </div>
  );
};

export default HomeCard;
