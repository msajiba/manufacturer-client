import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../../components/AxisPrivate";
import Loader from "../../../Shared/Loader";
import ServiceDeleteModal from "./ServiceDeleteModal";
import ServiceRow from "./ServiceRow";

const ManageService = () => {
  const { data, isLoading, error, refetch } = useQuery("services", async () => {
    return await axiosPrivate.get("http://localhost:5000/api/service");
  });
  const [showServiceDelete, setShowServiceDelete] = useState("");

  isLoading && <Loader />;
  error && console.log(error);

  const handleOpenModal = (service) => {
    setShowServiceDelete(service);
  };

  return (
    <div>
      <h3 className="text-end">
        Total Service :
        <span className="text-secondary"> {data?.data?.length} </span>
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th> No </th>
              <th> Avatar </th>
              <th> Name </th>
              <th> Email </th>
              <th colSpan="2" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((service, index) => {
              return (
                <ServiceRow
                  key={service._id}
                  handleOpenModal={handleOpenModal}
                  service={service}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {showServiceDelete && (
        <ServiceDeleteModal
          refetch={refetch}
          setShowServiceDelete={setShowServiceDelete}
          showServiceDelete={showServiceDelete}
        />
      )}
    </div>
  );
};

export default ManageService;
