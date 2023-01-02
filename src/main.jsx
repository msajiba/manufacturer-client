import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./services/context/product.context";
import { QueryClient, QueryClientProvider } from "react-query";
import { BlogProvider } from "./services/context/blog.context";

// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
