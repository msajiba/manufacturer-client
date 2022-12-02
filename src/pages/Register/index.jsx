import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../components/firebase/firebase.config";
import Loader from "../Shared/Loader";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  loading && <Loader />

  user && console.log(user);
  error && console.log(error);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(email, password);
    reset();
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User name"
                  className="input input-bordered input-sm "
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-sm "
                  {...register("email", { required: true, maxLength: 20 })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-sm w-80 "
                  {...register("password", {
                    required: true,
                  })}
                />
                {/* pattern: /^[A-Za-z]+$/i, */}
              </div>
              <div type="submit" className="form-control mt-6">
                <button className="btn btn-sm text-secondary hover:bg-secondary hover:border-none hover:text-primary">
                  Register
                </button>
              </div>
              <div>
                <span className="text-xs">
                  Don't have an account? please
                  <Link to="/login" className="text-blue-500 mx-1 ">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
