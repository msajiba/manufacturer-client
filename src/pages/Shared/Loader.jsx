import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
