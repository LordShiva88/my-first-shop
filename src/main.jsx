import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthContext from "./Pages/Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
      <AuthContext>
        <RouterProvider router={Router}></RouterProvider>
      </AuthContext>
    </React.StrictMode>
  </HelmetProvider>
);
