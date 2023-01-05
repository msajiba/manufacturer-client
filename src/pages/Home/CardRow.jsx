import React from "react";

const CardRow = ({ card }) => {
  const { title1, title2, des, ICON, step } = card;
  return (
    <div
      className="card bg-base-100 shadow-xl"
      data-aos="flip-left"
      data-aos-duration="3000"
      data-aos-delay="300"
    >
      <div className="card-body">
        <h2 className="card-title text-secondary  "> {step} </h2>
        <div className="flex justify-around items-center my-3">
          <div className="md:text-5xl text-3xl">{<ICON />}</div>
          <div>
            <h3 className="uppercase text-accent text-bold md:text-3xl">
              {title1} <br /> {title2}
            </h3>
          </div>
        </div>
        <div className="card-actions text-justify">
          <p className="font-serif"> {des} </p>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
