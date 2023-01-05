import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogContext from "../../hooks/useBlogContext";

const BlogShow = () => {
  const { id } = useParams();
  const { singleBlog, getSingleBlog } = useBlogContext();

  useEffect(() => {
    getSingleBlog(id);
  }, [id]);

  const { name, description, createOn } = singleBlog;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-secondary">{name}</h2>
          <div className="divider">DESCRIPTION</div>
          <p>
            <span className="text-accent justify-center"> {description}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary hover:text-accent hover:bg-secondary rounded-full text-primary bg-secondary btn-xs">
              {createOn?.slice(0, 10)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
