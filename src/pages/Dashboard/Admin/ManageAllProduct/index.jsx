import React from "react";
import { useState } from "react";
import useProduct from "../../../../hooks/useProduct";
import Loader from "../../../Shared/Loader";
import ProductModal from "./ProductModal";
import ProductRow from "./ProductRow";

const ManageAllProduct = () => {
  
  const [showProductModal, setShowProductModal] = useState("");

  // ===========> CUSTOM HOOK <=============
  const { data, isLoading, error, refetch } = useProduct();

  const handleProductModal = (product) => {
    setShowProductModal(product);
  };

  isLoading && <Loader />;
  error && console.log(error.message);

  return (
    <div>
      <h3 className="text-end text-accent">
        Total Product:
        <span className="text-secondary"> {data?.data?.length} </span>
      </h3>
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
              <th className="text-center" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.data?.map((product, index) => {
              return (
                <ProductRow
                  handleProductModal={handleProductModal}
                  product={product}
                  index={index}
                  key={product._id}
                />
              );
            })}
          </tbody>
        </table>
        {showProductModal && (
          <ProductModal
            refetch={refetch}
            showProductModal={showProductModal}
            setShowProductModal={setShowProductModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageAllProduct;
