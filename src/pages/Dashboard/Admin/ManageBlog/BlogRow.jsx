import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogRow = ({ blog, index, handlerModalShow }) => {
  const { name, createOn, email, _id } = blog;
  const navigate = useNavigate();

  return (
    <tr>
      <td> {index + 1} </td>
      <td> {name} </td>
      <td> {email} </td>
      <td> {createOn} </td>
      <td className="flex justify-around">
        <label
          onClick={() => handlerModalShow(blog)}
          htmlFor="blog-modal"
          className="btn btn-xs hover:bg-secondary bg-red-500 border-none text-primary"
        >
          <FaTrash />
        </label>

        <button
          onClick={() => navigate(`/dashboard/blog-update/${_id}`)}
          className="btn btn-xs bg-accent border-none text-secondary"
        >
          <FaEdit />
        </button>
        <button onClick={()=> navigate(`/dashboard/blog-view/${_id}`)} className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent">
          <AiFillEye />
        </button>
      </td>
    </tr>
  );
};

export default BlogRow;
