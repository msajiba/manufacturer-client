import React from "react";
import Divider from "../Shared/Divider";
import Loader from "../Shared/Loader";
import HomeProductRow from "./HomeProductRow";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const HomeProduct = () => {
  
  const { data, isLoading, error } = useProduct();
  isLoading && <Loader />;
  error && console.log(error);

  return (
    <div>
      <Divider text={"latest Product"} />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-12 ">
        {data?.data
          ?.slice(0,4)
          .reverse()
          .map((product) => {
            return <HomeProductRow key={product._id} product={product} />;
          })}
      </div>
      <div className="text-end mt-2 mb-20">
        <button
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
          className="btn btn-xs md:mr-16 mr-5 bg-secondary text-primary hover:text-secondary border-none"
        >
          <Link to="/product">See more..</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
