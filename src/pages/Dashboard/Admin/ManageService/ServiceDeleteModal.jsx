import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../components/AxisPrivate";

const ServiceDeleteModal = ({
  showServiceDelete,
  setShowServiceDelete,
  refetch,
}) => {
  const { _id, name, createOn, image } = showServiceDelete;

  const handleDeleteService = async (id) => {
    const URL = `http://localhost:5000/api/service/${id}`;
    const { data } = await axiosPrivate.delete(URL);
    if (data?.acknowledged) {
      toast.success("Delete Service successfully");
      refetch();
      setShowServiceDelete("");
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="service-delete-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <div className="avatar justify-center flex">
            <div className="w-32 mask mask-hexagon">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <p className="mt-5 text-center font-bold">
            Are you sure delete this service?
          </p>
          <p className="text-secondary text-center"> {name} </p>
          <p className="py-4 text-center">
            Create On
            <span className="text-secondary"> {createOn} </span>
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteService(_id)}
              className="btn mx-2 btn-xs bg-red-500 border-none"
            >
              Delete
            </button>
            <label
              htmlFor="service-delete-modal"
              className="btn btn-xs bg-accent border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDeleteModal;
