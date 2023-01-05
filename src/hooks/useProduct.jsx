import axios from "axios";
import { useQuery } from "react-query";

const useProduct = () => {
  const { data, isLoading, error, refetch } = useQuery("products", async () => {
    return axios.get("https://manufacture-server.vercel.app/api/product/user");
  });

  return { data, isLoading, error, refetch };
};

export default useProduct;
