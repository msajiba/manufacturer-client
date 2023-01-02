import React from "react";
import img from "../../assets/team.jpg";
import Divider from "../Shared/Divider";

const AboutTeam = () => {
  return (
    <>
      <Divider text={'Our Dream Team'} />
      <div
        className="hero min-h-screen cover "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-primary">
              Textile inspires and equips people to accelerate sustainable
              practices in the textile value chain. We focus on minimizing the
              harmful impacts of the global textile industry and maximizing its
              positive effects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
