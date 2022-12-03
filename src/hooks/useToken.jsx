import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  const currentUser = { email: email };

  useEffect(() => {
    if (email) {
      const getUserToken = async () => {
        const URL = `http://localhost:5000/api/user/login/${email}`;
        const { data } = await axios.put(URL, currentUser);
        const token = data?.accessToken;
        setToken(token)
        localStorage.setItem("accessToken", token);
      };
      getUserToken();
    }
  }, [user]);

  return [token];
};

export default useToken;
