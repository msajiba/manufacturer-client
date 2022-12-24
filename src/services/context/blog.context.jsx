import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import {
  REMOVE_SINGLE_BLOG,
  SET_BLOG,
  SET_BLOG_ERROR,
  SET_BLOG_LOADING,
  SET_SHOW_MODAL,
} from "../constant/blog.constant";
import reducer from "../reducer/blog.reducer";

const BlogContext = createContext();

const initialState = {
  blogLoading: false,
  blogError: false,
  blogs: [],
  showBlogModal: false,
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

  const handlerModalShow = (blog) => {
    dispatch({ type: SET_SHOW_MODAL, payload: blog });
  };

  const handleDeleteModal = async (id) => {
    const URL = `http://localhost:5000/api/blog/${id}`;
    const { data } = await axios.delete(URL);
    if(data.acknowledged){
      toast.success("Delete Blog successfully");
    }

    dispatch({ type: REMOVE_SINGLE_BLOG, payload: id });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider
      value={{ ...state, handlerModalShow, handleDeleteModal }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
