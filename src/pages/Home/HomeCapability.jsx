import React from "react";
import { FaArrowRight } from "react-icons/fa";
import picture from "../../assets/copacity.png";
import { useNavigate } from "react-router-dom";

const HomeCapability = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero bg-base-100 px-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="">
            <img
              src={picture}
              className=" md:w-11/12 w-80 rounded-lg shadow-2xl"
            />
          </div>
          <div className=" py-10">
            <h1 className="md:text-5xl text-2xl font-bold">Our Capabilities</h1>
            <p className="py-6 text-justify ">
              You’ve been inspired–now it’s time to make it happen. Transform
              your ideas into reality with Manufacturer Leather’s manufacturing
              capabilities. With over four decades of experience in leather
              craftsmanship and manufacturing
            </p>
            <button
              onClick={() => navigate("/about")}
              className="btn bg-secondary text-primary hover:bg-accent hover:text-secondary border-none  "
            >
              Learn More
              <span className="px-2">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCapability;
