import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const OrderModal = ({ refetch, showOrderModal, setShowOrderModal }) => {
  const { _id, name, email, phone } = showOrderModal;

  const handleDeleteOrder = async (id) => {
    const URL = `http://localhost:5000/api/order/${id}`;
    const { data } = await axios.delete(URL);
    data?.acknowledged && toast.success("Order Delete Success");
    setShowOrderModal("");
    refetch();
  };

  return (
    <>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">Are you sure delete ? </h3>
          <p className="pt-4 text-sm text-accent">
            This is <span className="text-secondary"> {name} </span> order
          </p>
          <p className="pt-4 text-sm text-accent">
            Customer <span className="text-secondary">{phone}</span> Number
          </p>

          <p className="py-2 text-sm text-accent">
            <span className="text-secondary"> {email} </span>
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-xs border-none mx-2 bg-red-500"
            >
              delete
            </button>
            <label htmlFor="order-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
