import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../pages/Shared/Loader";
import auth from "../firebase/firebase.config";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
