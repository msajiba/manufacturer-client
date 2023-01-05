import axios from "axios";
import { useQuery } from "react-query";

const useBlog = () => {
  const { data, isLoading, error, refetch } = useQuery("blogs", async () => {
    return axios.get("https://manufacture-server.vercel.app/api/blog/user");
  });

  return { data, isLoading, error, refetch };
};

export default useBlog;