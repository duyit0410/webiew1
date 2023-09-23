import { bottomTabData } from "@layouts/BottomTab";
import ScreenLayout from "@layouts/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Search from "@pages/Search";
import Test from "@pages/Test";
import React from "react";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

const bottomTabRouter = bottomTabData.map(item => ({path: item.path, element: item.element}))

const router = createHashRouter([
  {
    element: <ScreenLayout />,
    children: [
      // { path: "*", element:<Navigate to={'/home'}/> },
    ...bottomTabRouter,
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>},
    {path: '/search', element: <Search/>},
    {path: '/', element: <Test/>}
  ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
