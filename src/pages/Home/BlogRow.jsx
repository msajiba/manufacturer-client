import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BlogRow = ({ blog }) => {
  const { main, title, img } = blog;

  return (
    <NavLink to="/service">
      <div className="card bg-base-100 shadow-xl image-full h-60 main-section ">
        <figure>
          <img src={img} alt={title} className="w-full" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-thin ">{title}</h2>
          <p> {main} </p>
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

export default BlogRow;
