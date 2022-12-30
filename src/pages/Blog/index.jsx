import React from "react";
import useBlog from "../../hooks/useBlog";
import Loader from "../Shared/Loader";

const Blog = () => {
  const { data, isLoading, error } = useBlog();
  isLoading && <Loader />;
  error && console.log(error);
  return (
    <div className=" ">
      <p> blocking page.... {data?.data?.length} </p>
    </div>
  );
};

export default Blog;
