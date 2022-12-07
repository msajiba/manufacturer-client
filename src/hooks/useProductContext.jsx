import { useContext } from "react";
import { ProductContext } from "../services/context/product.context";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
