import React from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FadeLoader color="#C68029" />
    </div>
  );
};

export default Loader;
