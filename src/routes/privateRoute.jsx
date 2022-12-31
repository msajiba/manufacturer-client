import AddBlog from "../pages/Dashboard/Admin/AddBlog";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import ManageAllOrder from "../pages/Dashboard/Admin/ManageAllOrder";
import ManageAllProduct from "../pages/Dashboard/Admin/ManageAllProduct";
import ProductUpdate from "../pages/Dashboard/Admin/ManageAllProduct/ProductUpdate";
import ProductView from "../pages/Dashboard/Admin/ManageAllProduct/ProductView";
import ManageAllReview from "../pages/Dashboard/Admin/ManageAllReview";
import ManageBlog from "../pages/Dashboard/Admin/ManageBlog";
import BlogUpdate from "../pages/Dashboard/Admin/ManageBlog/BlogUpdate";
import BlogView from "../pages/Dashboard/Admin/ManageBlog/BlogView";
import ManageOrder from "../pages/Dashboard/User/ManageOrder";
import UpdateProfile from "../pages/Shared/UpdateProfile";


const privateRoute = [
  { path: "manage-all-order", name: "ORDERS", Component: ManageAllOrder },
  { path: "manage-review", name: "REVIEW", Component: ManageAllReview },
  { path: "manage-all-product", name: "PRODUCT", Component: ManageAllProduct },
  { path: "product-update/:id", name: "UPDATE", Component: ProductUpdate },
  { path: "product-view/:id", name: "VIEW", Component: ProductView },
  { path: "manage-order", name: "ORDER", Component: ManageOrder },
  { path: "add-product", name: "ADD-PRODUCT", Component: AddProduct },
  { path: "add-blog", name: "ADD-Blog", Component: AddBlog },
  { path: "blog-update/:id", name: "UPDATE-Blog", Component: BlogUpdate },
  { path: "blog-view/:id", name: "VIEW-Blog", Component: BlogView },
  { path: "manage-blog", name: "MANAGE-BLOG", Component: ManageBlog },
  { path: "profile", name: "PROFILE", Component: UpdateProfile },

];

export default privateRoute;
