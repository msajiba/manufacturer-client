import axios from "axios";
import { useState, useEffect } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const email = user?.email;

  useEffect(() => {
    if (email) {
      const getAdmin = async () => {
        try {
          const URL = `http://localhost:5000/api/user/admin/${email}`;
          const { data } = await axios.get(URL);
          const isAdmin = data?.admin;
          setAdmin(isAdmin);
          setIsLoading(false);
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
