import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {
  ERROR_REVIEW,
  LOADING_REVIEW,
  SET_REVIEW,
} from "../constant/review.constant";
import reducer from "../reducer/review.reducer";

const ReviewContext = createContext();

const initialState = {
  reviewLoading: false,
  reviewError: false,
  reviews: [],
};

const ReviewProvider = ({ children }) => {
  const getReview = async () => {
    try {
      dispatch({ type: LOADING_REVIEW });

      const URL = "http://localhost:5000/api/review";
      const { data } = await axios.get(URL);
      dispatch({ type: SET_REVIEW, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_REVIEW, payload: error });
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReviewContext.Provider value={{ ...state }}>
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
