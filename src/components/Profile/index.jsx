import React from "react";
import { FaUserCircle, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import Loader from "../../pages/Shared/Loader";

const Profile = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useAuthState(auth);

  loading && <Loader />;
  error && console.log(error);

  const logOut = async () => {
    await signOut();
  };

  return (
    <div className="dropdown dropdown-hover ">
      <label tabIndex={0} className="text-2xl inline-block pt-3 mx-2  ">
        <FaUserCircle />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44"
      >
        <li>
          {user && <p className='text-sm text-accent'> {user.email} </p> }
        </li>

        <li>
          <Link to="/profile" className='text-sm'>
            <FaEdit /> Profile
          </Link>
        </li>
        <li>
          <button className="btn-sm" onClick={logOut}>
            <FaSignOutAlt /> SignOut
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
