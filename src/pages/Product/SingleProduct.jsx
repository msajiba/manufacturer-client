import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import SingleProductShow from "./SingleProductShow";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const fetchSingleProduct = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`http://localhost:5000/api/product/user/${id}`);
    setSingleProduct(data);
    data && setIsLoading(false);
  };

  isLoading && <Loader />

  
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  
  isLoading && <Loader />;

  return (
    <div>
      <SingleProductShow singleProduct={singleProduct} />
    </div>
  );
};

export default SingleProduct;
