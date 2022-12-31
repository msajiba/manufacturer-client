import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../../../Shared/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useProductContext from "../../../../hooks/useProductContext";
import { useEffect } from "react";
import Loader from "../../../Shared/Loader";
import { useState } from "react";

const ProductUpdate = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [singleProduct, setSingleProduct] = useState({});

  const { name, price, minQuantity, image, stoke, sku, overview } =
    singleProduct;

  const getSingleProduct = async () => {
    const URL = `http://localhost:5000/api/product/${id}`;
    const res = await axios.get(URL);
    const productResult = await res.data;
    setSingleProduct(productResult);
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const onSubmit = async (data) => {
    const image = data.picture[0];
    const name = data.name;
    const price = data.price;
    const stoke = data.stoke;
    const minQuantity = data.quantity;
    const sku = data.sku;
    const overview = data.overview;

    const product = {
      image,
      name,
      price,
      stoke,
      minQuantity,
      sku,
      overview,
    };
    const URL = `http://localhost:5000/api/product/${id}`;
    const res = await axios.patch(URL, product);
    const updateProduct = await res?.data;
    updateProduct?.status &&
      (toast.success(updateProduct?.message),
      navigate("/dashboard/manage-all-product"));
  };

  return (
    <>
      <div className="shadow-2xl border py-20 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="text-end">
            <button
              onClick={() => navigate(`/dashboard/product-view/${id}`)}
              className="btn btn-xs bg-secondary text-primary border-none shadow-2xl"
            >
              View Product
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
                <span className="label-text text-accent">Product Name</span>
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
                <span className="label-text text-accent">Product Price</span>
              </label>

              <input
                type="number"
                defaultValue={price}
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
                defaultValue={stoke}
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
                  Product Min-Quantity
                </span>
              </label>
              <input
                type="number"
                defaultValue={minQuantity}
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
                defaultValue={sku}
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
                <span className="label-text text-accent"></span>
              </label>

              <textarea
                defaultValue={overview}
                className="textarea input-xs input-bordered "
                placeholder="Product Overview"
                {...register("overview", {
                  required: true,
                  maxLength: 500,
                })}
              />
            </div>
          </div>
          <div className="md:flex justify-center items-center">
            <div className="form-control md:w-full md:mx-36 mt-6">
              <Button type="submit"> Update product </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpdate;
