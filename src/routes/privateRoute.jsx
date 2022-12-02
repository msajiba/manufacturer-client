import ManageAllOrder from "../pages/Dashboard/Admin/ManageAllOrder";
import ManageAllProduct from "../pages/Dashboard/Admin/ManageAllProduct";
import ManageAllReview from "../pages/Dashboard/Admin/ManageAllReview";
import ManageOrder from "../pages/Dashboard/User/ManageOrder";

const privateRoute = [
  { path: "manage-all-order", name: "ORDERS", Component: ManageAllOrder },
  { path: "manage-all-review", name: "REVIEW", Component: ManageAllReview },
  { path: "manage-all-product", name: "PRODUCT", Component: ManageAllProduct },
  { path: "manage-order", name: "ORDER", Component: ManageOrder },
];

export default privateRoute;
