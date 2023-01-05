import React from "react";
import {
  FaPager,
  FaChartLine,
  FaEnvelopeOpenText,
  FaFileAlt,
} from "react-icons/fa";
import Divider from "../Shared/Divider";

const ServiceCount = () => {
  const countList = [
    { id: "01", Img: FaPager, number: 24, title: "Luxury department stores" },
    {
      id: "02",
      Img: FaChartLine,
      number: 145,
      title: "Clothing retailers stores",
    },
    {
      id: "03",
      Img: FaEnvelopeOpenText,
      number: 61,
      title: "Fashion retailers stores",
    },
    {
      id: "04",
      Img: FaFileAlt,
      number: 249,
      title: "Brand name labels stores",
    },
  ];

  return (
    <div>
      <Divider text={"We have"} />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-2 md:px-16 px-5 pb-20">
        {countList.map(({ id, Img, number, title }) => {
          return (
            <div key={id} className="card shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> {title} </h2>

                <div className="flex">
                  <p>
                    <Img className="text-6xl text-accent" />
                  </p>
                </div>

                <div
                  className="card-actions flex justify-end items-end"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-easing="ease-in-out"
                >
                  <button className="btn btn-primary text-4xl shadow-2xl text-secondary">
                    {number}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCount;
