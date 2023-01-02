import React from "react";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import Divider from "../Shared/Divider";

const AboutLocation = () => {
  return (
    <>
    <Divider text={'Contact us'} />
    
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20 items-center  bg-base-100 py-10 ">
        <div className=" md:px-16 px-5">
          <h1 className="md:text-5xl font-bold"> Office Contacts </h1>
          <p className="md:pt-6 text-justify">
            We envision a global textile industry that protects and restores the
            environment and enhances lives.
          </p>
          <p className="text-accent flex text-sm  mt-5">
            <MdLocationOn className="text-2xl text-secondary mx-2" /> 350/2,
            Shahjahanpur, Dhaka,Bangladesh <br />
          </p>
          <p className="text-accent flex text-sm  mt-3">
            <MdCall className="text-2xl text-secondary mx-2" /> 01794005282 ,
            <br /> 01608262899
          </p>
          <p className="text-accent flex text-sm  mt-3">
            <MdEmail className="text-2xl text-secondary mx-2" />{" "}
            asajib499@gmail.com
          </p>
        </div>
        <div className="md:ml-16 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0701706141685!2d90.42382521449291!3d23.74487699490531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86eb2b15555%3A0x50d1e9a19ea17eb1!2sDISCRETESOFT!5e0!3m2!1sen!2sbd!4v1672650261739!5m2!1sen!2sbd"
            loading="lazy"
            className="h-96 w-4/5"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutLocation;
