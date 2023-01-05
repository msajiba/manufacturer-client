import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../../components/AxisPrivate";
import Loader from "../../../Shared/Loader";
import OrderModal from "./OrderModal";
import OrderRow from "./OrderRow";

const ManageAllOrder = () => {
  const [showOrderModal, setShowOrderModal] = useState("");

  const { data, isLoading, error, refetch } = useQuery("orders", async () => {
    return axiosPrivate.get("http://localhost:5000/api/order");
  });

  isLoading && <Loader />;
  error && console.log(error?.message);

  const handleOrderModal = (order) => {
    setShowOrderModal(order);
  };

  return (
    <div>
      <h3 className="text-end text-accent">
        Total Order :
        <span className="text-secondary"> {data?.data?.length} </span>
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr >
              <th> No </th>
              <th> Avatar </th>
              <th> Name </th>
              <th> User Name </th>
              <th> Email </th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Phone </th>
              <th> Status </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((order, index) => {
              return (
                <OrderRow
                  handleOrderModal={handleOrderModal}
                  order={order}
                  index={index}
                  key={order._id}
                />
              );
            })}
          </tbody>
        </table>

        {showOrderModal && (
          <OrderModal
            refetch={refetch}
            showOrderModal={showOrderModal}
            setShowOrderModal={setShowOrderModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageAllOrder;
