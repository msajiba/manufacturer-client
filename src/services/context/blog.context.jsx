import axios from "axios";
import { createContext, useReducer } from "react";
import { GET_SINGLE_BLOG, SINGLE_BLOG_ERROR, SINGLE_BLOG_LOADING } from "../constant/blog.constant";
import reducer from "../reducer/blog.reducer";


const BlogContext = createContext();

const initialState = {
  isSingleLoading: false,
  isSingleError: false,
  singleBlog: {},
};

const BlogProvider = ({ children }) => {

  const getSingleBlog = async (id) => {
    dispatch({ type: SINGLE_BLOG_LOADING });
    try {
      const URL = `https://manufacture-server.vercel.app/api/blog/user/${id}`;
      const { data } = await axios.get(URL);
      dispatch({ type: GET_SINGLE_BLOG, payload: data });
    } catch (error) {
      dispatch({ type: SINGLE_BLOG_ERROR, payload: error.message });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BlogContext.Provider value={{ ...state, getSingleBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
