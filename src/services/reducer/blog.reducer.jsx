import { GET_SINGLE_BLOG, SINGLE_BLOG_ERROR, SINGLE_BLOG_LOADING } from "../constant/blog.constant";

  
  const blogReducer = (state, action) => {
    switch (action.type) {
      
  //  ===============SINGLE_PRODUCT===============
      case SINGLE_BLOG_LOADING:
        return {
          ...state,
          isSingleLoading: true,
          isSingleError: false,
        };
  
      case GET_SINGLE_BLOG:
        return {
          ...state,
          isSingleLoading: false,
          isSingleError: false,
          singleBlog: action.payload,
        };
  
      case SINGLE_BLOG_ERROR:
        return {
          ...state,
          isSingleLoading: false,
          isSingleError: action.payload,
        };
  
      default:
        return state;
    }
  
    return state;
  };
  
  export default blogReducer;
  