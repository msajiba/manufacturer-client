import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 md:w-60 w-52  shadow-md rounded bg-base-200 text-base-content">
          <li className='btn-xs md:btn-sm'>
            <Link to="manage-all-order"> Manage All Order </Link>
          </li>
          <li className='btn-xs  md:btn-sm my-5'>
            <Link to="/dashboard/manage-all-product"> Manage All Product </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
