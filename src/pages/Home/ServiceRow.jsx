import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServiceRow = ({ service }) => {
  const { name, description, image } = service;
  return (
    <NavLink to="/service">
      <div
        className="card bg-base-100 shadow-xl image-full h-60"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="1000"
      >
        <figure>
          <img src={image} alt={name} className="w-full" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-mono ">{name}</h2>
          <p> {description.slice(0,50)} </p>
          <div className="card-actions justify-center ">
            <button className="btn hover:bg-secondary hover:text-primary btn-sm bg-transparent hover:border-none ">
              View
              <span className="px-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ServiceRow;
