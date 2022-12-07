import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import SingleProduct from "../pages/Product/SingleProduct";
import Register from "../pages/Register";
import Service from "../pages/Service";

const publicRoute = [
  { path: "/", name: "HOME", Component: Home },
  { path: "about", name: "ABOUT", Component: About },
  { path: "service", name: "SERVICE", Component: Service },
  { path: "blog", name: "BLOG", Component: Blog },
  { path: "product", name: "PRODUCT", Component: Product },
  { path: "product/:id", name: "ID", Component: SingleProduct },
  { path: "contact", name: "CONTACT", Component: Contact },
  { path: "login", name: "LOGIN", Component: Login },
  { path: "register", name: "REGISTER", Component: Register },
  { path: "*", name: "ERROR", Component: NotFound },
];

export default publicRoute;
