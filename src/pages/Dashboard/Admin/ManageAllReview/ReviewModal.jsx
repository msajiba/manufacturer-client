import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ReviewModal = ({ refetch, showModal, setShowModal }) => {
  const { _id, des } = showModal;
  const handleDeleteModal = async (id) => {
    const URL = `https://manufacture-server.vercel.app/api/review/${id}`;
    const { data } = await axios.delete(URL);
    data?.acknowledged && toast.success("Review Delete Success");
    setShowModal('')
    refetch()
  };
  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">Are you sure delete</h3>
          <p className="py-4 text-xs text-secondary">{des}</p>
          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteModal(_id)}
              className="btn btn-xs border-none mx-2 bg-red-500"
            >
              delete
            </button>
            <label htmlFor="review-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
