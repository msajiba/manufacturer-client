import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../../pages/Shared/Loader";
import auth from "../firebase/firebase.config";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);

  const location = useLocation();

  if (loading || isLoading) {
    return <Loader />;
  }


  if (!user || !admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
