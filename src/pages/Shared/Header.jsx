import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import auth from "../../components/firebase/firebase.config";
import Loader from "./Loader";
import Profile from "../../components/Profile";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  loading && <Loader />;

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user ? (
        <Profile />
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <img src={logo} className="md:w-32 w-28 hidden md:block " alt="logo" />
      </div>

      {/* SHOWING DASHBOARD MENU  */}

      <div className="navbar-end">
        <div className="dropdown">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
      
      {/* SHOWING DASHBOARD MENU  */}

      <div className="navbar-center hidden lg:flex border ">
        <ul className="menu menu-horizontal p-0 shadow text-secondary px-5  rounded">
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Header;
