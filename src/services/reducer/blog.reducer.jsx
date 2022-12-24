import {
  SET_BLOG,
  SET_BLOG_ERROR,
  SET_BLOG_LOADING,
} from "../constant/blog.constant";

const blogReducer = (state, action) => {
  switch (action.type) {
    case SET_BLOG_LOADING:
      return {
        ...state,
        blogLoading: true,
        blogError: false,
      };

    case SET_BLOG:
      return {
        ...state,
        blogLoading: false,
        blogError: false,
        blogs: action.payload,
      };
    case SET_BLOG_ERROR:
      return {
        ...state,
        blogLoading: false,
        blogError: action.payload,
      };

    default:
      return state;
  }

  return state;
};

export default blogReducer;
