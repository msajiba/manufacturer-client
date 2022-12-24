import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import {
  SET_BLOG,
  SET_BLOG_ERROR,
  SET_BLOG_LOADING,
} from "../constant/blog.constant";
import reducer from "../reducer/blog.reducer";

const BlogContext = createContext();

const initialState = {
  blogLoading: false,
  blogError: false,
  blogs: [],
};

const BlogProvider = ({ children }) => {
  const getBlogs = async () => {
    try {
      dispatch({ type: SET_BLOG_LOADING });
      const URL = "http://localhost:5000/api/blog";
      const { data } = await axios.get(URL);
      dispatch({ type: SET_BLOG, payload: data });
    } catch (error) {
      dispatch({ type: SET_BLOG_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ ...state }}>{children}</BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
