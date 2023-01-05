import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ServiceShow = () => {
  const [singleService, setSingleService] = useState({});
  const { id } = useParams();

  const getService = async () => {
    const res = await axios.get(`http://localhost:5000/api/service/user/${id}`);
    const getSingleService = await res.data;
    setSingleService(getSingleService);
  };

  useEffect(() => {
    getService();
  }, [id]);

  const { name, description } = singleService;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-secondary">{name}</h2>
          <div className="divider">DESCRIPTION</div>
          <p>
            <span className="text-accent justify-center"> {description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceShow;
