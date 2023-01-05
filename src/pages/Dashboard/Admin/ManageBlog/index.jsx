import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../../components/AxisPrivate";
import Loader from "../../../Shared/Loader";
import BlogDeleteModal from "./BlogDeleteModal";
import BlogRow from "./BlogRow";

const ManageBlog = () => {
  const [showBlogModal, setShowBlogModal] = useState("");

  const { data, isLoading, error, refetch } = useQuery('blogs', async()=> {
    return axiosPrivate.get('http://localhost:5000/api/blog/');
  });

  const handlerModalShow = (blog) => {
    setShowBlogModal(blog);
  };

  isLoading && <Loader />;
  error && console.log(error.message);

  return (
    <div className="overflow-x-auto">
      <h4 className="text-accent text-end"> Total Blog: {data?.data?.length} </h4>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th> No </th>
            <th> Name </th>
            <th> Email </th>
            <th> Create Time </th>
            <th colSpan="2" className="text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data?.data?.map((blog, index) => {
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
          setShowBlogModal={setShowBlogModal}
          showBlogModal={showBlogModal}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageBlog;
