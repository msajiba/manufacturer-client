import React from "react";
import PriceConvert from "../Shared/PriceConvert";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, stoke } = product;
  return (
    <NavLink to={`/product/${_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
