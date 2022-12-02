import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile absolute mt-20 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link to="manage-all-order"> Manage All Order </Link>
          </li>
          <li>
            <Link to="/dashboard/manage-all-product"> Manage All Product </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
