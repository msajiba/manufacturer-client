import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const ServiceRow = ({ index, service, handleOpenModal }) => {
  const navigate = useNavigate();
  const { name, image, _id, email } = service;

  return (
    <tr>
      <td> {index + 1} </td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </td>
      <td> {name} </td>
      <td> {email} </td>
      <td>
        <div className="flex justify-center">
          <label
            onClick={() => handleOpenModal(service)}
            htmlFor="service-delete-modal"
            className="btn btn-xs hover:bg-secondary bg-red-500 border-none text-primary"
          >
            <FaTrash />
          </label>

          <button
            onClick={() => navigate(`/dashboard/update-service/${_id}`)}
            className="btn btn-xs mx-3 bg-secondary border-none hover:text-primary text-accent"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => navigate(`/dashboard/view-service/${_id}`)}
            className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-accent text-primary"
          >
            <AiFillEye />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ServiceRow;
