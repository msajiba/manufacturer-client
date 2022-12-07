import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import {
  SET_PRODUCT,
  SET_PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
} from "../constant/product.constant";
import reducer from "../reducer/product.reducer";

const ProductContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const ProductProvider = ({ children }) => {
  const getProducts = async () => {
    dispatch({ type: SET_PRODUCT_LOADING });
    try {
      const URL = "http://localhost:5000/api/product";
      const { data } = await axios.get(URL);
      dispatch({ type: SET_PRODUCT, payload: data });
    } catch (error) {
      dispatch({ type: SET_PRODUCT_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
