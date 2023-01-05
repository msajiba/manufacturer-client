import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";
import { toast } from "react-toastify";
import auth from "../../../../components/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../../../components/AxisPrivate";

const AddService = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { register, handleSubmit, reset } = useForm();

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

    const URL = "https://manufacture-server.vercel.app/api/service";
    const res = await axiosPrivate.post(URL, service);
    const serviceResult = await res?.data;

    serviceResult?.status === false && toast.error(serviceResult?.message);
    !!(serviceResult?.status === true) &&
      (toast.success(serviceResult?.message), reset());
  };

  return (
    <div className="shadow-2xl border py-20 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex justify-center items-center">
          <div className="form-control ">
            <input
              type="file"
              className="input input-bordered input-md shadow"
              {...register("picture", { required: true })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control w-80  mx-2 ">
            <label className="label">
              <span className="label-text text-accent">Service Name</span>
            </label>
            <input
              type="text"
              placeholder="Service Name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 40 })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">
                Service Description
              </span>
            </label>
            <textarea
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
            <Button type="submit"> Add Service </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
