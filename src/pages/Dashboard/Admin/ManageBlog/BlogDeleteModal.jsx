import React from "react";

const BlogDeleteModal = ({ showBlogModal, handleDeleteModal }) => {
  const { _id, name, createOn } = showBlogModal;
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
            <label
              htmlFor="blog-modal"
              className="btn btn-xs bg-accent border-none"
            >
              Cancel
            </label>
            <button
              onClick={() => handleDeleteModal(_id)}
              className="btn mx-2 btn-xs bg-red-500 border-none"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDeleteModal;