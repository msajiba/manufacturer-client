import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../components/firebase/firebase.config";
import Button from "../Shared/Button";

const ContactFromTemp = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const company = data.company;
    const description = data.description;
    const phone = data.phone;

    const contact = {
      name,
      company,
      email,
      phone,
      description,
    };
    console.log(contact);
  };

  return (
    <div className=" shadow py-6 rounded-2xl md:mr-10 mx-5">
      <h4 className="text-center text-secondary font-bold font-serif md:text-2xl "> Fill The Form </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex justify-center items-center my-5">
          <div className="form-control md:w-80 mx-2 mt-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-sm"
              {...register("name", { required: true, maxLength: 40 })}
            />
          </div>
          <div className="form-control md:w-80 mx-2 mt-2 ">
            <input
              type="text"
              placeholder="Enter your company name"
              className="input input-bordered input-sm"
              {...register("company", { required: true, maxLength: 40 })}
            />
          </div>
        </div>

        <div className="md:flex justify-center items-center my-5">
          <div className="form-control md:w-80 mx-2 mt-2 ">
            <input
              type="email"
              placeholder="Email"
              defaultValue={email}
              className="input input-bordered input-sm  "
              {...register("email", { required: true, maxLength: 40 })}
            />
          </div>
          <div className="form-control md:w-80 mx-2 mt-2 ">
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="input input-bordered input-sm"
              {...register("phone", { required: true, maxLength: 40 })}
            />
          </div>
        </div>

        <div className="form-control mx-2">
          <textarea
            className="textarea input-sm textarea-warning "
            placeholder="How can we help?"
            {...register("description", {
              required: true,
              maxLength: 600,
            })}
          ></textarea>
        </div>

        <div className="md:flex justify-center items-center">
          <div className="form-control md:w-full  mt-6">
            <Button type="submit"> Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFromTemp;
