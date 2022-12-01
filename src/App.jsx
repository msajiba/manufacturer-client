import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import publicRoute from "./routes/publicRoute";
import Header from "./pages/Shared/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        {publicRoute.map(({ path, name, Component }) => {
          return <Route key={name} path={path} element={<Component />} />;
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
