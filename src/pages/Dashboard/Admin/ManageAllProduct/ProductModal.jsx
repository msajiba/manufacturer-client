import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ProductModal = ({ refetch, showProductModal, setShowProductModal }) => {
  const { _id, name } = showProductModal;

  const handleDeleteProduct = async (id) => {
    const URL = `http://localhost:5000/api/product/${id}`;
    const { data } = await axios.delete(URL);
    data?.acknowledged && toast.success("Product Delete Success");
    setShowProductModal("");
    refetch();
  };


  return (
    <>
      <input type="checkbox" id="product-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold"> Are you sure delete ? </h3>
          <p className="py-2 text-sm text-accent"> Product <span className="text-secondary"> {name} </span> </p>
          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="btn btn-xs border-none mx-2 bg-red-500"
            >
              delete
            </button>
            <label htmlFor="product-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
