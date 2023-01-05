import axios from "axios";
import { useQuery } from "react-query";

const useService = () => {
  const { data, isLoading, error, refetch } = useQuery("services", async () => {
    return await axios.get("https://manufacture-server.vercel.app/api/service/user");
  });
  return { data, isLoading, error, refetch };
};

export default useService;
