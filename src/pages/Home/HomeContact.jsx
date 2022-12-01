import React from "react";
import contact from "../../assets/banner.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeContact = () => {
  const navigate = useNavigate();

  return (
    <div className="hero my-20 " style={{ backgroundImage: `url(${contact})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="indicator md:py-16">
          <div className="indicator-item indicator-bottom mr-12">
            <button
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="200"
              onClick={() => navigate("/contact")}
              className="btn bg-secondary btn-sm border-none text-primary hover:bg-primary hover:text-secondary md:mb-36 "
            >
              Get Started
              <span className="px-1">
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div className="card border">
            <div className="card-body">
              <h2 className="card-title uppercase text-primary ">Call us on</h2>
              <p className="text-secondary pr-28"> +880179000111 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
