import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../components/firebase/firebase.config";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../Shared/Loader";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-5">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-60 w-52 shadow-md rounded-2xl bg-base-200 text-base-content">
          {!admin && (
            <li className="btn-xs md:btn-sm">
              <Link to="manage-order"> Manage Order </Link>
            </li>
          )}
          {admin && (
            <>
              <li className="btn-xs md:btn-sm hover:text-secondary my-2">
                <Link  to="/dashboard/add-product">Add Product </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm">
                <Link to="/dashboard/manage-all-product">
                  Manage Product
                </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/add-blog">Add Blog </Link>
              </li>
              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/manage-blog">Manage Blog </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/add-service">Add Service </Link>
              </li>
              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/manage-service">Manage Service </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm">
                <Link to="manage-all-order"> Manage Order </Link>
              </li>
              <li className="btn-xs hover:text-secondary  md:btn-sm mt-1">
                <Link to="/dashboard/manage-review">Manage Review </Link>
              </li>
              <li className="btn-xs hover:text-secondary  md:btn-sm mt-1">
                <Link to="/dashboard/manage-user"> Manage User </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
