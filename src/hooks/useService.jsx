import axios from "axios";
import { useQuery } from "react-query";

const useService = () => {
  const { data, isLoading, error, refetch } = useQuery("services", async () => {
    return await axios.get("http://localhost:5000/api/service/user");
  });
  return { data, isLoading, error, refetch };
};

export default useService;
