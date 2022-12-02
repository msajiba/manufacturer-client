import React from "react";
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loader from "../../pages/Shared/Loader";
import { RiDashboardLine } from "react-icons/ri";

const Profile = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);

  loading && <Loader />;
  error && console.log(error);

  const logOut = async () => {
    await signOut();
  };

  return (
    <>
      <li tabIndex={0}>
        <span className="text-2xl inline-block pt-3 mx-2 text-secondary">
          <FaUserCircle />
        </span>
        <ul className="shadow bg-base-100 rounded-box border z-50">
          <li>{user && <p className="text-sm"> {user.email} </p>}</li>

          <li >
            <Link to="/profile" className="text-sm">
              <FaEdit /> Profile
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="text-sm">
              <RiDashboardLine /> Dashboard
            </Link>
          </li>

          <li>
            <button className="btn-sm" onClick={logOut}>
              <FaSignOutAlt /> SignOut
            </button>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Profile;
