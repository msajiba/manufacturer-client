import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./services/context/product.context";
import { BlogProvider } from "./services/context/blog.context";
import { QueryClient, QueryClientProvider } from "react-query";

//USE QUERY SETUP
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <BlogProvider>
            <App />
        </BlogProvider>
      </ProductProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
