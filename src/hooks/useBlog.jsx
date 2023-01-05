import axios from "axios";
import { useQuery } from "react-query";

const useBlog = () => {
  const { data, isLoading, error, refetch } = useQuery("blogs", async () => {
    return axios.get("http://localhost:5000/api/blog/user");
  });

  return { data, isLoading, error, refetch };
};

export default useBlog;