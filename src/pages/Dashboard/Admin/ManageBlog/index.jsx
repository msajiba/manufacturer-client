import React, { useState } from "react";
import useBlogContext from "../../../../hooks/useBlogContext";
import Loader from "../../../Shared/Loader";
import BlogDeleteModal from "./BlogDeleteModal";
import BlogRow from "./BlogRow";

const ManageBlog = () => {
  const {
    blogLoading,
    blogError,
    blogs,
    handlerModalShow,
    showBlogModal,
    handleDeleteModal,
  } = useBlogContext();

  blogLoading && <Loader />;
  blogError && console.log(blogError);

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
          {blogs?.map((blog, index) => {
            return (
              <BlogRow
                handlerModalShow={handlerModalShow}
                blog={blog}
                index={index}
                key={blog._id}
              />
            );
          })}
        </tbody>
      </table>

      {showBlogModal && (
        <BlogDeleteModal
          handleDeleteModal={handleDeleteModal}
          showBlogModal={showBlogModal}
        />
      )}
    </div>
  );
};

export default ManageBlog;
