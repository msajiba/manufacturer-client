import React from "react";
import useProductContext from "../../../../hooks/useProductContext";
import Loader from "../../../Shared/Loader";

const ManageAllProduct = () => {
  const { isLoading, isError, products } = useProductContext();

  isLoading && <Loader />;
  isError && console.log(isError);

  console.log(products);

  return (
    <div>
      <h3 className="text-center"> Manage all order </h3>
    </div>
  );
};

export default ManageAllProduct;
