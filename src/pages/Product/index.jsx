import React from "react";
import useProductContext from "../../hooks/useProductContext";
import Loader from "../Shared/Loader";
import ProductCard from "./ProductCard";

const Product = () => {
  const { isLoading, isError, products } = useProductContext();

  isLoading && <Loader />;
  isError && console.log(isError);

  return (
    <div className="md:mx-16 mx-5 ">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {products.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
