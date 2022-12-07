import {
  SET_PRODUCT,
  SET_PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
} from "../constant/product.constant";

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case SET_PRODUCT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    case SET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }

  return state;
};

export default productReducer;
