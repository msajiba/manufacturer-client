import React from "react";
import { FaTrash } from "react-icons/fa";

const ReviewRow = ({ review, index, handleReviewModal }) => {
  const { ratting, des } = review;

  return (
    <tr>
      <th> {index + 1} </th>
      <td> {ratting} </td>
      <td> {des.slice(0,70)} </td>

      <td className="flex justify-around">
        <label
          onClick={() => handleReviewModal(review)}
          htmlFor="review-modal"
          className="btn btn-xs mx-2 border-none bg-red-500 hover:text-secondary "
        >
          <FaTrash />
        </label>
      </td>
    </tr>
  );
};

export default ReviewRow;
