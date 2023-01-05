import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../components/AxisPrivate";
import auth from "../../components/firebase/firebase.config";
import Loader from "../Shared/Loader";
import PriceConvert from "../Shared/PriceConvert";

const SingleProductShow = ({ singleProduct }) => {
  const { name, price, sku, minQuantity, stoke, overview, image } =
    singleProduct;
  const [orderQuantity, setOrderQuantity] = useState(minQuantity);
  const [user, isLoading] = useAuthState(auth);
  const email = user?.email;

  isLoading && <Loader />;

  let totalPrice = 0;

  if (orderQuantity === undefined) {
    totalPrice = minQuantity * price;
  } else {
    totalPrice = orderQuantity * price;
  }

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const phone = data.phone;
    const userName = data.userName;
    const address = data.address;

    const newOrder = {
      name,
      image,
      totalPrice,
      orderQuantity,
      userName,
      email,
      phone,
      address,
    };

    const URL = "http://localhost:5000/api/order";
    const res = await axiosPrivate.post(URL, newOrder);
    res?.status === 201 && (toast.success(res.data), reset());
  };

  return (
    <div className="hero min-h-screen bg-base-100 md:px-14">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 md:w-80 mx-auto">
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h1 className="md:text font-bold"> {name} </h1>
            <h1 className="md:font-bold mt-1">
              Price :
              <span className="text-secondary pl-2">
                {<PriceConvert price={price} />}
              </span>
            </h1>
            <p className="md:font-bold text-sm">
              SKU : <span className="text-secondary pl-1"> {sku} </span>
            </p>

            <p className="md:font-bold text-sm">
              STOKE AVAILABLE :
              <span className="text-secondary pl-1"> {stoke}</span>
            </p>
            <p className="md:font-bold text-sm">
              Minimum Order :
              <span className="text-secondary pl-1"> {minQuantity}</span>
            </p>

            <h1 className="md:font-bold mt-1">
              Price :
              <span className="text-secondary pl-2">
                {<PriceConvert price={totalPrice} />}
              </span>
            </h1>

            <p className="py-6 italic text-accent font-thin">{overview}</p>
          </div>
        </div>

        <div className="divider md:divider-horizontal"></div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">
                    Enter your name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-sm"
                  {...register("userName", { required: true, maxLength: 20 })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">
                    Enter Your Email
                  </span>
                </label>
                <input
                  type="email"
                  defaultValue={email}
                  placeholder="email"
                  className="input input-bordered input-sm"
                  {...register("email", { required: true, maxLength: 20 })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">
                    Enter your Number
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="enter Phone Number"
                  className="input input-bordered input-sm "
                  {...register("phone", {
                    required: true,
                  })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Address</span>
                </label>

                <textarea
                  type="text"
                  placeholder="Enter your Address"
                  className="input input-bordered"
                  {...register("address", {
                    required: true,
                  })}
                />
              </div>

              <div className="form-control mt-2 ">
                <input
                  type="number"
                  name="orderQuantity"
                  placeholder="Quantity"
                  defaultValue={minQuantity}
                  onChange={(e) => setOrderQuantity(e.target.value)}
                  className="input text-center input-bordered input-sm w-24 "
                />
              </div>

              {orderQuantity < minQuantity ? (
                <p className="text-xs text-red-500 mt-3">
                  Please Add more quantity
                </p>
              ) : (
                ""
              )}

              {orderQuantity > stoke ? (
                <p className="text-xs text-red-500 mt-3">Stoke not available</p>
              ) : (
                ""
              )}

              <div type="submit" className="form-control mt-6">
                <button
                  type="submit"
                  disabled={
                    orderQuantity < minQuantity || orderQuantity > stoke
                  }
                  className="btn btn-sm text-secondary hover:bg-secondary hover:border-none hover:text-primary"
                >
                  Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductShow;
