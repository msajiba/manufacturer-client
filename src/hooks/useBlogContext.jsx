import { useContext } from "react";
import { BlogContext } from "../services/context/blog.context";

const useBlogContext = () => {
  return useContext(BlogContext);
};

export default useBlogContext;
