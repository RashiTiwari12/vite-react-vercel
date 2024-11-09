import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Login from "../pages/Login/Login";
import ExpertsList from "../pages/ExpertsList/ExpertsList";
import ExpertForm from "../pages/ExpertForm/ExpertForm";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/experts",
      element: <ExpertsList />,
    },
    {
      path: "/expertform",
      element: <ExpertForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
