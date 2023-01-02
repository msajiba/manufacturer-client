import React from "react";
import PriceConvert from "../Shared/PriceConvert";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, stoke } = product;
  
  return (
    <NavLink to={`/product/${_id}`}>
      <div className="card bg-base-100 shadow-xl h-80 ">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title "> {name} </h2>

          <div className="card-actions justify-between">
            <p className="text-secondary text-sm">Stoke : {stoke}</p>
            <p className="text-secondary text-sm">
              Price: {<PriceConvert price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
