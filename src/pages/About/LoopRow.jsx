import React from "react";

const LoopRow = ({ ele }) => {
  const { year, title } = ele;
  return (
    <>
      <div className="card w-96 bg-secondary shadow-xl image-full">
        <figure>
          <img
            src="https://manufacturer.stylemixthemes.com/leather/wp-content/uploads/sites/7/2018/11/photo-1520946708818-4966701c25e6.jpeg"
            alt="Shoes"
          />
        </figure>
        <div className="indicator">
          <div className="indicator-item indicator-middle badge mt-5  p-4 text-2xl border-none shadow-2xl z-10 bg-secondary">
            <p className=""> {year} </p>
          </div>
        </div>
        <div className="card-body text-center mt-5">
          <p className="text-justify font-serif ">{title}</p>
        </div>
      </div>
    </>
  );
};

export default LoopRow;
