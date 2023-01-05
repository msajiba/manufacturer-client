import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../components/AxisPrivate";

const BlogDeleteModal = ({ showBlogModal, setShowBlogModal, refetch }) => {

  const { _id, name, createOn } = showBlogModal;

  const handleDeleteBlog = async(id)=> {
    const URL = `https://manufacture-server.vercel.app/api/blog/${id}`;
    const { data } = await axiosPrivate.delete(URL);
    if(data?.acknowledged){
      toast.success("Delete Blog successfully");
      refetch();
      setShowBlogModal('');
    }
  }

  return (
    <>
      <input type="checkbox" id="blog-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">
            Are you sure delete this
            <span className="text-secondary"> {name} </span> Blog
          </h3>
          <p className="py-4">
            This blog is createOn
            <span className="text-secondary"> {createOn} </span>
          </p>

          <div className="flex justify-end">
            <button
              onClick={() => handleDeleteBlog(_id)}
              className="btn mx-2 btn-xs bg-red-500 border-none"
            >
              Delete
            </button>
            <label
              htmlFor="blog-modal"
              className="btn btn-xs bg-accent border-none"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDeleteModal;
