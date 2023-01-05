import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";
import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../../../components/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivate from "../../../../components/AxisPrivate";

const UpdateService = () => {
  const [singleService, setSingleService] = useState({});
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const getService = async () => {
    const res = await axiosPrivate.get(`http://localhost:5000/api/service/${id}`);
    const getSingleService = await res.data;
    setSingleService(getSingleService);
  };

  useEffect(() => {
    getService();
  }, [id]);

  const {name, description, image} = singleService;


  const onSubmit = async (data) => {
    const image = data.picture[0];
    const name = data.name;
    const description = data.description;
    const service = {
      image,
      name,
      description,
      email,
    };

    const URL = `http://localhost:5000/api/service/${id}`
    const res = await axiosPrivate.patch(URL, service);
    const serviceResult = await res?.data;

    serviceResult?.status === false && toast.error(serviceResult?.message);
    !!(serviceResult?.status === true) &&
      (toast.success(serviceResult?.message), navigate('/dashboard/manage-service'));
  };

  return (
    <div className="shadow-2xl border py-20 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-end">
          <button
            onClick={() => navigate(`/dashboard/view-service/${id}`)}
            className="btn btn-xs bg-secondary text-primary border-none shadow-2xl"
          >
            View Service
          </button>
        </div>
        <div className="md:flex justify-center items-center">
          <div className="form-control ">
            <input
              type="file"
              defaultValue={image}
              className="input input-bordered input-md shadow"
              {...register("picture", { required: true })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control w-80  mx-2 ">
            <label className="label">
              <span className="label-text text-accent">
                Update Service Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Service Name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 40 })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">
                Update Service Description
              </span>
            </label>
            <textarea
            defaultValue={description}
              className="textarea input-sm textarea-warning "
              placeholder="Service Description"
              {...register("description", {
                required: true,
                maxLength: 600,
              })}
            ></textarea>
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control md:w-full md:mx-36 mt-6">
            <Button type="submit"> Update Service </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
