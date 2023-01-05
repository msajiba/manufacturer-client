import React from "react";
import useBlog from "../../hooks/useBlog";
import Divider from "../Shared/Divider";
import Loader from "../Shared/Loader";
import HomeBlogRow from "./HomeBlogRow";
import { Link } from "react-router-dom";


const HomeBlog = () => {
  const { data, isLoading, error } = useBlog();

  isLoading && <Loader />;
  error && console.log(error);

  return (
    <div>
      <Divider text={"latest blogs"} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:px-12 px-5 ">
        {data?.data
          ?.slice(0, 3)
          .reverse()
          .map((blog) => {
            return <HomeBlogRow key={blog._id} blog={blog} />;
          })}
      </div>
      <div className="text-end mt-2 mb-20">
        <button
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
          className="btn btn-xs md:mr-16 mr-5 bg-secondary text-primary hover:text-secondary border-none"
        >
          <Link to="/blog">See more..</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeBlog;
