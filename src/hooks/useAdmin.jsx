import { useState, useEffect } from "react";
import axisPrivate from "../components/AxisPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const email = user?.email;
  
  if (email) {
    useEffect(() => {
      const getAdmin = async () => {
        setIsLoading(true);

        const URL = `http://localhost:5000/api/user/admin/${email}`;
        const { data } = await axisPrivate.get(URL);
        const isAdmin = data?.admin;
        if (isAdmin) {
          setAdmin(isAdmin);
          setIsLoading(false);
        }
      };

      getAdmin();
    }, [user]);
  }

  return [admin, isLoading];
};

export default useAdmin;
