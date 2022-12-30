import React from "react";
import useProduct from "../../hooks/useProduct";
import Loader from "../Shared/Loader";
import ProductCard from "./ProductCard";

const Product = () => {
  const { data, isLoading, error } = useProduct();
  isLoading && <Loader />;
  error && console.log(error.message);

  return (
    <div className="md:mx-16 mx-5 ">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        {data?.data?.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
