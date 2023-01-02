import React from "react";
import useBlog from "../../hooks/useBlog";
import Divider from "../Shared/Divider";
import Footer from "../Shared/Footer";
import Loader from "../Shared/Loader";
import BlogRow from "./BlogRow";

const Blog = () => {
  const { data, isLoading, error } = useBlog();
  isLoading && <Loader />;
  error && console.log(error);
  return (
    <div>
      <Divider text={"all blogs"} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-16 px-5 mb-20 ">
        {data?.data?.reverse().map((blog) => {
          return <BlogRow key={blog._id} blog={blog} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
