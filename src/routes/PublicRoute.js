import React from "react";
import { Layout, Login, PageNotFound } from "../pages";

const PublicRoute = () => {
  return {
    path: "/",
    element: <Login />,
    errorElement: <PageNotFound />
  };
};

export default PublicRoute;
