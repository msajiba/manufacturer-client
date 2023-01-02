import React from "react";
import useService from "../../hooks/useService";
import Divider from "../Shared/Divider";
import Loader from "../Shared/Loader";
import ServiceRow from "./ServiceRow";

const HomeService = () => {
  const { data, isLoading, error } = useService();
  isLoading && <Loader />;
  error && console.log(error);

  return (
    <div className="w-full ">
      <Divider text={"service"} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:px-10 px-10 bg-base-100 my-20">
        {data?.data?.map((service) => {
          return <ServiceRow key={service._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default HomeService;
