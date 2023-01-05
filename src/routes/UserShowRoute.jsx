import BlogShow from "../pages/Blog/BlogShow";
import SingleProduct from "../pages/Product/SingleProduct";
import ServiceShow from "../pages/Service/ServiceShow";


const UserShowRoute = [
  { path: "product/:id", name: "SHOW", Component: SingleProduct },
  { path: "blog/:id", name: "SHOW", Component: BlogShow },
  { path: "service/:id", name: "SHOW", Component: ServiceShow },
];
export default UserShowRoute;
