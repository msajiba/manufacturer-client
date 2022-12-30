import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../../Shared/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
    
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const image = data.picture;
    const name = data.name;
    const price = data.price;
    const stoke = data.stoke;
    const minQuantity = data.quantity;
    const sku = data.sku;
    const overview = data.overview;
    const description = data.description;

    const product = {
      image,
      name,
      price,
      stoke,
      minQuantity,
      sku,
      overview,
      description,
    };

    // const URL = "http://localhost:5000/api/product";
    // const res = await axios.post(URL, product);
    // const createPost = await res?.data;

    // createPost?.status === false && toast.error(createPost?.message);
    // !!(createPost?.status === true) &&
    //   (toast.success(createPost?.message), reset());
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
              <span className="label-text text-accent">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 40 })}
            />
          </div>
          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Product Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="input input-bordered input-sm "
              {...register("price", {
                required: true,
              })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Product Stoke </span>
            </label>
            <input
              type="number"
              placeholder="Product Stoke"
              className="input input-bordered input-sm "
              {...register("stoke", {
                required: true,
                maxLength: 4,
              })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">
                Product Min-Quantity{" "}
              </span>
            </label>
            <input
              type="number"
              placeholder="Product Sku"
              className="input input-bordered input-sm "
              {...register("quantity", {
                required: true,
                maxLength: 2,
              })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Product Sku </span>
            </label>
            <input
              type="text"
              placeholder="Product Sku"
              className="input input-bordered input-sm "
              {...register("sku", {
                required: true,
                maxLength: 10,
              })}
            />
          </div>

          <div className="form-control w-80 mx-2">
            <label className="label">
              <span className="label-text text-accent">Product Overview </span>
            </label>

            <textarea
              className="textarea input-xs input-bordered "
              placeholder="Product Overview"
              {...register("overview", {
                required: true,
                maxLength: 50,
              })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control md:w-full  md:mx-36">
            <label className="label">
              <span className="label-text text-accent">
                Product Description
              </span>
            </label>
            <textarea
              className="textarea input-sm textarea-warning "
              placeholder="Product Description"
              {...register("description", {
                required: true,
                maxLength: 100,
              })}
            ></textarea>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <div type="submit" className="form-control md:w-full md:mx-36 mt-6">
            <Button> Update product </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
