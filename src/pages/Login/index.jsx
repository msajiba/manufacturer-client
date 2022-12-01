import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../components/firebase/firebase.config";
import Button from "../Shared/Button";
import Loader from "../Shared/Loader";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  loading && <Loader />;
  error && console.log(error);
  user && console.log(user);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    reset();
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="text-center shadow rounded-2xl py-5 ">
          <h3 className="text-3xl "> Login Now </h3>
          <button className="btn btn-sm my-5 text-secondary hover:bg-secondary hover:border-none hover:text-primary">
            <span>
              <FaGoogle className="inline-block text-2xl mx-2" /> Login With
              Google
            </span>
          </button>
          <button className="btn btn-sm text-secondary hover:bg-secondary hover:border-none hover:text-primary ">
            <span>
              <FaFacebook className="inline-block text-2xl mx-2" /> Login With
              Facebook
            </span>
          </button>
        </div>

        <div className="divider md:divider-horizontal">OR</div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-accent">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-sm"
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
                  className="input input-bordered input-sm "
                  {...register("password", {
                    required: true,
                  })}
                />
              </div>
              <div type="submit" className="form-control mt-6">
                <Button> Login </Button>
              </div>
              <div>
                <span className="text-xs">
                  Don't have an account? please
                  <Link to="/register" className="text-blue-500 mx-1">
                    Register
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

export default Login;
