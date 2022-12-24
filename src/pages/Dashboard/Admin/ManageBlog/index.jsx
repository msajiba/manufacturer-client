import React from "react";
import useBlogContext from "../../../../hooks/useBlogContext";
import Loader from "../../../Shared/Loader";
import BlogRow from "./BlogRow";

const ManageBlog = () => {
  const { blogLoading, blogError, blogs } = useBlogContext();

  blogLoading && <Loader />;
  blogError && console.log(blogError);
  console.log(blogs);

  return (
    <div className="overflow-x-auto">
        <h4 className="text-accent text-end"> Total Blog: {blogs.length} </h4>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th> No </th>
            <th> Name </th>
            <th> Create Time </th>
            <th colSpan="2" className="text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, index) => {
            return <BlogRow blog={blog} index={index} key={blog._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlog;
