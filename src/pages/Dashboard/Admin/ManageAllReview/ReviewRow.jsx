import React from "react";

const ReviewRow = ({ review, index, handleReviewModal }) => {
  const { ratting, des } = review;

  return (
    <tr>
      <th> {index + 1} </th>
      <td> {ratting} </td>
      <td> {des} </td>

      <td className="flex justify-around">
        <label
          onClick={() => handleReviewModal(review)}
          htmlFor="review-modal"
          className="btn btn-xs mx-2 border-none bg-red-500"
        >
          Delete
        </label>

        <button className="btn btn-xs hover:bg-secondary hover:text-accent border-none bg-secondary text-accent">
          View
        </button>
      </td>
    </tr>
  );
};

export default ReviewRow;
