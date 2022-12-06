import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Shared/Button";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const picture = data.picture;
    const name = data.name;
    const price = data.price;
    const stoke = data.stoke;
    const quantity = data.quantity;
    const sku = data.sku;
    const overview = data.overview;
    const description = data.description;

    const product = {
      picture,
      name,
      price,
      stoke,
      quantity,
      sku,
      overview,
      description,
    };
    console.log(product);

    reset();
  };

  return (
    <div className="shadow-2xl border py-20 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex justify-center items-center">
          <div className="form-control ">
            <input
              type="file"
              className="input input-bordered input-md shadow"
              {...register("picture", { required: true, maxLength: 20 })}
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
              {...register("name", { required: true, maxLength: 20 })}
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
              })}
            />
          </div>

          <div className="form-control w-80  mx-2">
            <label className="label">
              <span className="label-text text-accent">Product Quantity </span>
            </label>
            <input
              type="number"
              placeholder="Product Sku"
              className="input input-bordered input-sm "
              {...register("quantity", {
                required: true,
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
              })}
            ></textarea>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <div type="submit" className="form-control md:w-full md:mx-36 mt-6">
            <Button> Add Blogs </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
