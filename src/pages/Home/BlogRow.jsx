import React from "react";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BlogRow = ({ blog }) => {
  const { main, title, img } = blog;

  return (
    <NavLink to="/service">
      <div
        className="card bg-base-100 hover:shadow-2xl image-full h-60 main-section "
        data-aos="flip-up"
        data-aos-duration="3000"
        data-aos-delay="2000"
      >
        <figure>
          <img src={img} alt={title} className="w-full" />
        </figure>
        <div className="card-body text-center ">
          <div className="card-actions  pt-28">
            <p> {title} </p>
          </div>
          <div className="card-actions flex justify-center items-center ">
            <p className="text-2xl text-secondary">
              {" "}
              <FaClock />{" "}
            </p>
            <p className="text-secondary">
              {" "}
              December {new Date().getDate()}, {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BlogRow;
