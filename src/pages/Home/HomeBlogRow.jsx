import React from "react";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomeBlogRow = ({ blog }) => {
  const { name, img, _id, createOn } = blog;

  return (
    <NavLink to={`/dashboard/blog-view/${_id}`}>
      <div
        className="card bg-base-100 hover:shadow-2xl image-full h-60 main-section "
        data-aos="flip-up"
        data-aos-duration="3000"
        data-aos-delay="500"
      >
        <figure>
          <img src={img} alt={name} className="w-full" />
        </figure>
        <div className="card-body text-center ">
          <div className="card-actions  pt-28">
            <p> {name} </p>
          </div>
          <div className="card-actions flex justify-center items-center ">
            <p className="text-2xl text-secondary">
              <FaClock />
            </p>
            <p className="text-secondary">Date: {createOn.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeBlogRow;
