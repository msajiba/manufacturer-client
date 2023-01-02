import React from "react";
import useService from "../../hooks/useService";
import Divider from "../Shared/Divider";
import Loader from "../Shared/Loader";
import ServiceItemRow from "./ServiceItemRow";

const ServiceItem = () => {
  const { data, isLoading, error } = useService();
  isLoading && <Loader />;
  error && console.log(error);
  return (
    <div>
        <Divider text={'all services'} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:px-10 px-10 bg-base-100 my-20">
        {data?.data?.map((service) => {
          return <ServiceItemRow key={service._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServiceItem;
