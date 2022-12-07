import React from "react";
import useProductContext from "../../../../hooks/useProductContext";
import Loader from "../../../Shared/Loader";
import ProductRow from "./ProductRow";

const ManageAllProduct = () => {
  const { isLoading, isError, products } = useProductContext();

  isLoading && <Loader />;
  isError && console.log(isError);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th> No </th>
            <th> Name </th>
            <th> Price </th>
            <th> Quality </th>
            <th> Stoke </th>
            <th> SKU </th>
            <th> Action </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => {
            return (
              <ProductRow product={product} index={index} key={product._id} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProduct;
