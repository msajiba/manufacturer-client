import React from "react";

const ReviewRow = ({ review, index }) => {
  const { ratting, des } = review;
  return (
    <tr>
      <th> {index + 1} </th>
      <td> {ratting} </td>
      <td> {des} </td>

      <td className="flex justify-around">
        <button className="btn btn-xs border-none bg-red-500"> delete </button>
        <button className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent">
          View
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
