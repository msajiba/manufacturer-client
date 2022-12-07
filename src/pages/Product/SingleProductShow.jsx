import React from "react";
import Button from "../Shared/Button";
import PriceConvert from "../Shared/PriceConvert";

const SingleProductShow = ({ singleProduct }) => {
  const { name, price, sku, minQuantity, stoke, description, overview } =
    singleProduct;

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold"> {name} </h1>
          <h1 className="text-2xl font-bold my-3">
           Price:  {<PriceConvert price={price} />}
          </h1>
          <p className="py-6 italic text-accent">{description}</p>

          <p> SKU : {sku} </p>
          <p> STOKE AVAILABLE : {stoke} </p>
          <p> Min-Quantity : {minQuantity} </p>

          <form action="">
            <div className="card-actions justify-start py-5">
              <div className="form-control  ">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered input-md w-24 "
                />
              </div>

              <button
                type="submit"
                className="btn btn-md text-secondary hover:bg-secondary hover:border-none hover:text-primary"
              >
                ADD ORDER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProductShow;
