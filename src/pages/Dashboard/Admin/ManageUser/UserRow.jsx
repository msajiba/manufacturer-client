import axios from "axios";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../components/AxisPrivate";

const UserRow = ({ index, user, userModalHandler, refetch }) => {
  const { email, createdOn, role, _id } = user;

  const makeAdminHandler = async (id) => {
    const URL = `https://manufacture-server.vercel.app/api/user/${id}`;
    const user = { email: email };
    const { data } = await axiosPrivate.patch(URL, user);
    refetch();
    data?.status && toast.success(data?.message);
  };


  return (
    <tr>
      <th> {index + 1} </th>
      <td> {email.split('@')[0]} </td>
      <td> {email} </td>
      <td>
        {role ? (
          <button className="btn btn-xs btn-success text-primary cursor-none">
            {role}
          </button>
        ) : (
          <button
            onClick={() => makeAdminHandler(_id)}
            className="btn btn-xs bg-secondary text-primary border-none hover:text-secondary"
          >
            Make Admin
          </button>
        )}
      </td>
      <td> {createdOn.slice(0, 19)} </td>
      <td>
        <div className="flex justify-center">
          <label
            onClick={() => userModalHandler(user)}
            htmlFor="service-delete-modal"
            className="btn btn-xs hover:bg-secondary bg-red-500 border-none text-primary"
          >
            <FaTrash />
          </label>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
