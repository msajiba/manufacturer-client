import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../pages/Shared/Loader";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const email = user?.email;


  useEffect(() => {
    if (email) {
      const getAdmin = async () => {
        setIsLoading(true);
        try {
          const URL = `https://manufacture-server.vercel.app/api/user/admin/${email}`;
          const { data } = await axios.get(URL);
          const isAdmin = data?.admin;
          setAdmin(isAdmin);
          isAdmin && setIsLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      getAdmin();
    }
  }, [user]);

  return [admin, isLoading];
};

export default useAdmin;
