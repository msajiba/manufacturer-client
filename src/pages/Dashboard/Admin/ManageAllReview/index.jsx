import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../../../Shared/Loader";
import ReviewRow from "./ReviewRow";
import ReviewModal from "./ReviewModal";

const ManageAllReview = () => {
  const [showModal, setShowModal] = useState("");

  const { isLoading, error, data, refetch } = useQuery("review", async () => {
    return await axios.get("http://localhost:5000/api/review");
  });

  isLoading && <Loader />;
  error && console.log(error);

  const handleReviewModal = (review) => {
    setShowModal(review);
  };

  return (
    <div>
      <h3 className="text-end text-accent">
        Total Review :
        <span className="text-secondary">{data?.data?.length}</span>{" "}
      </h3>
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
          {data?.data?.map((review, index) => {
            return (
              <ReviewRow
                handleReviewModal={handleReviewModal}
                review={review}
                index={index}
                key={review._id}
              />
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <ReviewModal
          setShowModal={setShowModal}
          showModal={showModal}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageAllReview;
