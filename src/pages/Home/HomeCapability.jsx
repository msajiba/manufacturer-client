import React from "react";
import { FaArrowRight } from "react-icons/fa";
import picture from "../../assets/copacity.png";
import { useNavigate } from "react-router-dom";

const HomeCapability = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero bg-base-100 md:px-16 px-5">
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <img
              src={picture}
              className=" md:w-11/12 w-80 rounded-lg shadow-2xl"
            />
          </div>
          <div className=" py-10">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="md:text-5xl text-2xl font-bold"
            >
              Our Capabilities
            </h1>
            <p className="py-6 text-justify ">
              You’ve been inspired–now it’s time to make it happen. Transform
              your ideas into reality with Manufacturer Leather’s manufacturing
              capabilities. With over four decades of experience in leather
              craftsmanship and manufacturing
            </p>
            <button
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="500"
              onClick={() => navigate("/about")}
              className="btn bg-secondary text-primary hover:bg-accent hover:text-secondary border-none btn-sm md:btn-md "
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
