import React from "react";

const BlogRow = ({ blog, index }) => {
  const { name, createOn } = blog;

  return (
    <tr>
      <td> {index + 1} </td>
      <td> {name} </td>
      <td> {createOn} </td>
      <td  className="flex justify-around">
        <button className="btn btn-xs hover:bg-secondary bg-red-500 border-none text-primary">
          Delete
        </button>
        <button className="btn btn-xs bg-accent border-none text-secondary">
          Edit
        </button>
      </td>
    </tr>
  );
};

export default BlogRow;
