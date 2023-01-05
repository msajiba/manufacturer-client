import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../../components/AxisPrivate";
import Loader from "../../../Shared/Loader";
import UserDeleteModal from "./UserDeleteModal";
import UserRow from "./UserRow";

const ManageUser = () => {
  const [showUser, setShowUser] = useState("");

  const { data, isLoading, error, refetch } = useQuery("users", async () => {
    return await axiosPrivate.get("http://localhost:5000/api/user");
  });

  isLoading && <Loader />;
  error && console.log(error?.message);

  const userModalHandler = (user) => {
    setShowUser(user);
  };

  return (
    <div>
      <h3 className="text-end text-accent">
        Total user:
        <span className="text-secondary"> {data?.data?.length} </span>
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th> No </th>
              <td> Name </td>
              <td> Email </td>
              <td> Role </td>
              <td> Create Time </td>
              <td className="text-center"> Action </td>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user, index) => {
              return (
                <UserRow
                  key={user._id}
                  userModalHandler={userModalHandler}
                  index={index}
                  user={user}
                  refetch={refetch}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {showUser && (
        <UserDeleteModal
          setShowUser={setShowUser}
          showUser={showUser}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageUser;
