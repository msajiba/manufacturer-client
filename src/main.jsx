import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./services/context/product.context";
import { BlogProvider } from "./services/context/blog.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </ProductProvider>
  </BrowserRouter>
);
