import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../components/firebase/firebase.config";
import useAdmin from "../../hooks/useAdmin";
import Loader from "../Shared/Loader";
import { IoIosAdd } from "react-icons/io";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FaUsersCog } from "react-icons/fa";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);


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
              <Link to="/dashboard/manage-order"> <RxDragHandleHorizontal className="text-2xl" />  Manage Order </Link>
            </li>
          )}

          {admin && (
            <>
              <li className="btn-xs md:btn-sm hover:text-secondary my-2">
                <Link  to="/dashboard/add-product">  <IoIosAdd className="text-2xl" /> Add Product </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm">
                <Link to="/dashboard/manage-all-product">
                <RxDragHandleHorizontal className="text-2xl" />  Manage Product
                </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/add-blog"> <IoIosAdd className="text-2xl" /> Add Blog </Link>
              </li>
              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/manage-blog"><RxDragHandleHorizontal className="text-2xl" /> Manage Blog </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/add-service"> <IoIosAdd className="text-2xl" /> Add Service </Link>
              </li>
              <li className="btn-xs hover:text-secondary md:btn-sm mt-1">
                <Link to="/dashboard/manage-service"> <RxDragHandleHorizontal className="text-2xl" /> Manage Service </Link>
              </li>

              <li className="btn-xs hover:text-secondary md:btn-sm">
                <Link to="manage-all-order"> <RxDragHandleHorizontal className="text-2xl" /> Manage Order </Link>
              </li>
              <li className="btn-xs hover:text-secondary  md:btn-sm mt-1">
                <Link to="/dashboard/manage-review"> <RxDragHandleHorizontal className="text-2xl" /> Manage Review </Link>
              </li>
              <li className="btn-xs hover:text-secondary  md:btn-sm mt-1">
                <Link to="/dashboard/manage-user"> <FaUsersCog className='text-2xl' />  Manage User </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
