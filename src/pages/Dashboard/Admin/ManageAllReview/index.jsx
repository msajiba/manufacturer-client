import React from "react";
import useReviewContext from "../../../../hooks/useReviewContext";
import Loader from "../../../Shared/Loader";
import ReviewRow from "./ReviewRow";

const ManageAllReview = () => {
  const { reviewLoading, reviewError, reviews } = useReviewContext();

  reviewLoading && <Loader />;
  reviewError && console.log(reviewError?.message);

  return (
    <div>
      <h3> Manage all review... </h3>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th> No </th>
            <th> Ratting </th>
            <th> Description </th>
            <th className="text-center" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review, index) => {
            return <ReviewRow review={review} index={index} key={review._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllReview;
