import {
  REMOVE_SINGLE_BLOG,
  SET_BLOG,
  SET_BLOG_ERROR,
  SET_BLOG_LOADING,
  SET_SHOW_MODAL,
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

    case SET_SHOW_MODAL:
      return {
        ...state,
        showBlogModal: action.payload,
      };

    case REMOVE_SINGLE_BLOG:
    const id = action.payload;
    const reamingBlog = state.blogs.filter((blog)=> blog._id !== id );
      return {
        ...state,
        blogs: reamingBlog,
        showBlogModal: false,
        blogLoading: false,
        blogError: false,
      };

    default:
      return state;
  }

  return state;
};

export default blogReducer;
