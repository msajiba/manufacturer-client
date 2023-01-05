import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import PriceConvert from "../../../Shared/PriceConvert";

const UserOrderModal = ({ refetch, showOrderModal, setShowOrderModal }) => {
  const { _id, name, orderQuantity, totalPrice } = showOrderModal;

  const handleDeleteOrder = async (id) => {
    const URL = `http://localhost:5000/api/order/user/${id}`;
    const { data } = await axios.delete(URL);
    data?.acknowledged && toast.success("Order Delete Success");
    setShowOrderModal("");
    refetch();
  };

  return (
    <>
      <input type="checkbox" id="user-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">Are you sure delete ? </h3>
          <p className="pt-4 text-sm text-accent">
            This is <span className="text-secondary"> {name} </span> order
          </p>
          <p className="pt-4 text-sm text-accent">
            Total <span className="text-secondary">{orderQuantity}</span>{" "}
            Quantity
          </p>

          <p className="py-2 text-sm text-accent">
            <span className="text-secondary">
              Total Price <PriceConvert price={totalPrice} />
            </span>
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-xs border-none mx-2 bg-red-500"
            >
              delete
            </button>
            <label htmlFor="user-order-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrderModal;
