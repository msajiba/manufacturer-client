import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import {
  SET_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT_ERROR,
  SET_SINGLE_PRODUCT_LOADING,
} from "../constant/product.constant";
import reducer from "../reducer/product.reducer";

const ProductContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  isSingleError: false,
  singleProduct: {},
};

const ProductProvider = ({ children }) => {

  const getSingleProduct = async (id) => {
    dispatch({ type: SET_SINGLE_PRODUCT_LOADING });
    try {
      const URL = `http://localhost:5000/api/product/${id}`;
      const { data } = await axios.get(URL);
      dispatch({ type: SET_SINGLE_PRODUCT, payload: data });
    } catch (error) {
      dispatch({ type: SET_SINGLE_PRODUCT_ERROR, payload: error.message });
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider};
