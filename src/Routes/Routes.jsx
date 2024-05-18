import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Menu } from "../Pages/Menu/Menu/Menu";
import { Oder } from "../Pages/Order/Oder";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/Home/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home /> ,
        },
        {
          path: "menu",
          element: <Menu /> ,
        },
        {
          path: "/order/:category",
          element: <Oder /> ,
        },
        {
          path: "/login",
          element: <Login /> ,
        },
        {
          path: "/signUp",
          element: <SignUp /> ,
        },
      ],
    },
  ]);