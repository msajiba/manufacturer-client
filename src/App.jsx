import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import publicRoute from "./routes/publicRoute";
import Header from "./pages/Shared/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from "./pages/Dashboard";
import privateRoute from "./routes/privateRoute";
import ManageAllOrder from "./pages/Dashboard/Admin/ManageAllOrder";
import RequireAuth from "./components/middleware/RequireAuth";
import auth from "./components/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./hooks/useAdmin";
import ManageOrder from "./pages/Dashboard/User/ManageOrder";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <>
      <Header />

      <Routes>
        {publicRoute.map(({ path, name, Component }) => {
          return <Route key={name} path={path} element={<Component />} />;
        })}

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={admin ? <ManageAllOrder /> : <ManageOrder />}
          ></Route>
          {privateRoute.map(({ path, Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
          
          

      </Routes>
      
      <ToastContainer />
    </>
  );
}

export default App;
