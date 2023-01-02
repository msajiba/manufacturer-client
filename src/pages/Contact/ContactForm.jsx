import React from "react";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import ContactFromTemp from "./ContactFromTemp";

const ContactForm = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-center  bg-base-100 py-10 ">
        <div className=" md:px-16 px-5">
          <h1 className="md:text-2xl font-bold text-center text-secondary uppercase"> Call Us </h1>

          <p className="text-accent flex text-sm  mt-3">
            <MdCall className="text-2xl text-secondary mx-2" /> 01794005282
            <br /> Don’t hesitate to contact us
          </p>
          <p className="text-accent flex text-sm  mt-3">
            <MdEmail className="text-2xl text-secondary mx-2" />{" "}
            asajib499@gmail.com
          </p>
          <p className="text-accent flex text-sm  mt-5">
            <MdLocationOn className="text-2xl text-secondary mx-2" /> Working
            Time <br />
            Mon-Fri: 9.00 am - 6.00 pm / Closed on weekends
          </p>
        </div>
        <div>
          <ContactFromTemp />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
