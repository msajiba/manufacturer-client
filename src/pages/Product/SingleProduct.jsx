import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../../hooks/useProductContext";
import Loader from "../Shared/Loader";
import SingleProductShow from "./SingleProductShow";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, isSingleError, singleProduct } =
    useProductContext();

  isSingleLoading && <Loader />;
  isSingleError && console.log(isSingleError);

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <div>
      <SingleProductShow singleProduct={singleProduct} />
    </div>
  );
};

export default SingleProduct;
