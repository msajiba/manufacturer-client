import React from "react";
import { useState } from "react";
import BlogDeleteModal from "./BlogDeleteModal";

const BlogRow = ({ blog, index, handlerModalShow }) => {
  const { name, createOn } = blog;

  return (
    <tr>
      <td> {index + 1} </td>
      <td> {name} </td>
      <td> {createOn} </td>
      <td className="flex justify-around">
        <label
          onClick={() => handlerModalShow(blog)}
          htmlFor="blog-modal"
          className="btn btn-xs hover:bg-secondary bg-red-500 border-none text-primary"
        >
          Delete
        </label>

        <button className="btn btn-xs bg-accent border-none text-secondary">
          Edit
        </button>
        <button className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent">
          View
        </button>
      </td>
    </tr>
  );
};

export default BlogRow;
