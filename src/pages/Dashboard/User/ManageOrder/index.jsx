import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../components/firebase/firebase.config";
import Loader from "../../../Shared/Loader";
import UserOrderRow from "./UserOrderRow";
import UserOrderModal from "./UserOrderModal";

const ManageOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [showOrderModal, setShowOrderModal] = useState("");

  const { data, isLoading, error, refetch } = useQuery(
    [email, "orders"],
    async () => {
      return axios.get(`http://localhost:5000/api/order/user/${email}`);
    }
  );

  const handleOrderModal = (order) => {
    setShowOrderModal(order);
  };

  isLoading && <Loader />;
  error && console.log(error);

  return (
    <div>
      <h3 className="text-end text-accent">
        Total Order :
        <span className="text-secondary"> {data?.data?.length} </span>
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
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
                <UserOrderRow
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
          <UserOrderModal
            refetch={refetch}
            showOrderModal={showOrderModal}
            setShowOrderModal={setShowOrderModal}
          />
        )}
      </div>
    </div>
  );
};

export default ManageOrder;
