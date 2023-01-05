import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";
import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../../../components/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axiosPrivate from "../../../../components/AxisPrivate";

const BlogUpdate = () => {
  const [blogResult, setBlogResult] = useState({});
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();

  const getSingleBlog = async () => {
    const URL = `https://manufacture-server.vercel.app/api/blog/${id}`;
    const res = await axiosPrivate.get(URL);
    const singleBLog = await res.data;
    setBlogResult(singleBLog);
  };

  useEffect(() => {
    getSingleBlog();
  }, [id]);

  const { name, description, image } = blogResult;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const image = data.picture[0];
    const name = data.name;
    const description = data.description;

    const blog = {
      image,
      name,
      description,
      email,
    };

    const URL = `https://manufacture-server.vercel.app/api/blog/${id}`;
    const res = await axiosPrivate.patch(URL, blog);
    const blogResult = await res?.data;
    blogResult.status &&
      (toast.success(blogResult?.message), navigate(`/dashboard/manage-blog`));
  };

  return (
    <div className="shadow-2xl border py-20 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-end">
          <button
            onClick={() => navigate(`/dashboard/blog-view/${id}`)}
            className="btn btn-xs bg-secondary text-primary border-none shadow-2xl"
          >
            View Blog
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
              <span className="label-text text-accent">Blog Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Product Name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 40 })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Blog Description</span>
            </label>
            <textarea
              defaultValue={description}
              className="textarea input-sm textarea-warning "
              placeholder="Blog Description"
              {...register("description", {
                required: true,
                maxLength: 600,
              })}
            ></textarea>
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control md:w-full md:mx-36 mt-6">
            <Button type="submit"> Update Blog </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogUpdate;
