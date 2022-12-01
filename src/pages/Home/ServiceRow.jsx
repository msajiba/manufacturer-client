import React from "react";

const ServiceRow = ({ service }) => {
  const { title1, title2, des, ICON, step } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary  "> {step} </h2>
       <div className='flex justify-around items-center my-3'>
            <div className='md:text-5xl text-3xl'>
                {<ICON /> }
            </div>
            <div>
                <h3 className='uppercase text-bold md:text-3xl'> {title1} <br /> {title2} </h3>
            </div>
       </div>
        <div className="card-actions text-justify">
          <p> {des} </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceRow;
