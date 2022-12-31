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
import ManageService from "../pages/Dashboard/Admin/ManageService";
import AddService from "../pages/Dashboard/Admin/ManageService/AddService";
import UpdateService from "../pages/Dashboard/Admin/ManageService/UpdateService";
import ViewService from "../pages/Dashboard/Admin/ManageService/ViewService";
import ManageOrder from "../pages/Dashboard/User/ManageOrder";
import UpdateProfile from "../pages/Shared/UpdateProfile";


const privateRoute = [
  { path: "manage-all-order", name: "ORDERS", Component: ManageAllOrder },
  { path: "manage-order", name: "ORDER", Component: ManageOrder },

  { path: "manage-review", name: "REVIEW", Component: ManageAllReview },
  
  { path: "manage-all-product", name: "PRODUCT", Component: ManageAllProduct },
  { path: "product-update/:id", name: "UPDATE", Component: ProductUpdate },
  { path: "product-view/:id", name: "VIEW", Component: ProductView },
  { path: "add-product", name: "ADD-PRODUCT", Component: AddProduct },

  { path: "manage-blog", name: "MANAGE-BLOG", Component: ManageBlog },
  { path: "add-blog", name: "ADD-Blog", Component: AddBlog },
  { path: "blog-update/:id", name: "UPDATE-Blog", Component: BlogUpdate },
  { path: "blog-view/:id", name: "VIEW-Blog", Component: BlogView },

  { path: "manage-service", name: "MANAGE_SERVICE", Component: ManageService },
  { path: "add-service", name: "ADD_SERVICE", Component: AddService },
  { path: "update-service/:id", name: "UPDATE_SERVICE", Component: UpdateService },
  { path: "view-service/:id", name: "VIEW_SERVICE", Component: ViewService },
  
  { path: "profile", name: "PROFILE", Component: UpdateProfile },

];

export default privateRoute;
