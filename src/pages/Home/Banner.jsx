import React from "react";
import homeBanner from "../../assets/banner.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className="hero w-full min-h-screen"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <div className="hero-overlay bg-opacity-96"></div>
        <div className=" text-left text-neutral-content">
          <div className="max-w-md inline">
            <h1
              className="mb-5 md:text-5xl text-primary text-4xl font-bolder"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Looking for a US
            </h1>
            <h1 className="mb-5 md:text-5xl font-serif font-bold text-primary">
              Leather Manufacturer?
            </h1>
            <p className="mb-5 text-2x font-thin ">
              From startups to global brands, we supply <br /> the world’s best
              leather goods.
            </p>

            <button
              onClick={() => navigate("/about")}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out"
              className="btn hover:text-secondary hover:bg-primary md:btn-sm btn-xs btn-primary bg-secondary border-none text-primary "
            >
              In Details <FaArrowRight className="text-end ml-2" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-out"
              className="btn hover:text-secondary hover:bg-primary md:btn-sm mx-3 btn-xs btn-primary bg-secondary border-none text-primary "
            >
              Get a Quote
              <FaArrowRight className="text-end ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
