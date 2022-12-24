import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const image = data.picture;
    const name = data.name;
    const description = data.description;

    const blog = {
      image,
      name,
      description,
    };

    const URL = "http://localhost:5000/api/blog";
    const res = await axios.post(URL, blog);
    const blogResult = await res?.data;

    blogResult?.status === false && toast.error(blogResult?.message);
    !!(blogResult?.status === true) &&
      (toast.success(blogResult?.message), reset());
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
              <span className="label-text text-accent">Blog Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Blog Description</span>
            </label>
            <textarea
              className="textarea input-sm textarea-warning "
              placeholder="Blog Description"
              {...register("description", {
                required: true,
                maxLength: 500,
              })}
            ></textarea>
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div type="submit" className="form-control md:w-full md:mx-36 mt-6">
            <Button> Add Blog </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
