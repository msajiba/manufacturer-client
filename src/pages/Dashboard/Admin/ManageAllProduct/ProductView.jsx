import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductContext from "../../../../hooks/useProductContext";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleAdminProduct, getSingleAdminProduct } = useProductContext();

 
  useEffect(() => {
    getSingleAdminProduct(id);
  }, [id]);

  const { name, price, minQuantity, stoke, sku, overview} =
    singleAdminProduct;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-secondary">{name}</h2>
          <p>
            Product Price : <span className="text-secondary">$ {price}</span>
          </p>
          <p>
            Product Quantity :
            <span className="text-secondary"> {minQuantity}</span>
          </p>
          <p>
            Product sku :<span className="text-secondary"> {sku}</span>
          </p>
          <div className="divider">OVERVIEW</div>
          <p>
            <span className="text-accent justify-center"> {overview}</span>
          </p>
          <div className="card-actions justify-between">
            <button
              onClick={() => navigate(`/dashboard/product-update/${id}`)}
              className="btn btn-primary hover:text-accent hover:bg-secondary rounded-full text-primary bg-secondary btn-sm"
            >
              Update
            </button>
            <button className="btn btn-primary cursor-default hover:text-accent hover:bg-secondary text-primary bg-secondary btn-sm">
              Stoke :
              <span className="text-primary ml-2 font-mono shadow-md shadow-primary rounded-full p-1 ">
                {stoke}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
