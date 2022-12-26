import {
  ERROR_REVIEW,
  LOADING_REVIEW,
  SET_REVIEW,
} from "../constant/review.constant";

const reviewReducer = (state, action) => {
  switch (action.type) {
    case LOADING_REVIEW:
      return {
        ...state,
        reviewLoading: true,
      };
    case ERROR_REVIEW:
      return {
        ...state,
        reviewLoading: false,
        reviewError: action.payload,
      };
    case SET_REVIEW:
      return {
        ...state,
        reviewLoading: false,
        reviewError: false,
        reviews: action.payload,
      };

    default:
      return state;
  }
  return state;
};

export default reviewReducer;

