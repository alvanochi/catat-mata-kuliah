import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./config/firebase/firebase.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Pages/404.jsx";
import Login from "./components/Pages/login.jsx";
import Register from "./components/Pages/register.jsx";
import Matkul from "./components/Pages/matkul.jsx";
import ItemContextProvider from "./context/ItemContext.jsx";
import Meet from "./components/Pages/meet.jsx";
import DetailMatkul from "./components/Pages/detailMatkul.jsx";
import Dashboard from "./components/Pages/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/matkul",
        element: <Matkul />,
      },
      {
        path: "matkul/:matkulID",
        element: <DetailMatkul />,
      },
      {
        path: "matkul/:matkulID/:meetID",
        element: <Meet />,
      },
      {
        path: "masuk",
        element: <Login />,
      },
      {
        path: "daftar",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ItemContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ItemContextProvider>
);
