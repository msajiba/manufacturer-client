import {
  SET_SINGLE_ADMIN_PRODUCT,
  SET_SINGLE_ADMIN_PRODUCT_ERROR,
  SET_SINGLE_ADMIN_PRODUCT_LOADING,
  SET_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT_ERROR,
  SET_SINGLE_PRODUCT_LOADING,
} from "../constant/product.constant";

const productReducer = (state, action) => {
  switch (action.type) {
    
//  ===============SINGLE_PRODUCT USER===============
    case SET_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        isSingleLoading: true,
        isSingleError: false,
      };

    case SET_SINGLE_PRODUCT:
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: false,
        singleProduct: action.payload,
      };

    case SET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: action.payload,
      };
    
//  ===============SINGLE_PRODUCT ADMIN===============
    case SET_SINGLE_ADMIN_PRODUCT_LOADING:
      return {
        ...state,
        isSingleAdminLoading: true,
        isSingleAdminError: false,
      };

    case SET_SINGLE_ADMIN_PRODUCT:
      return {
        ...state,
        isSingleAdminLoading: false,
        isSingleAdminError: false,
        singleAdminProduct: action.payload,
      };

    case SET_SINGLE_ADMIN_PRODUCT_ERROR:
      return {
        ...state,
        isSingleAdminLoading: false,
        isSingleAdminError: action.payload,
      };

    default:
      return state;
  }

  return state;
};

export default productReducer;
