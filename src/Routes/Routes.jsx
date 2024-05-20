import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Menu } from "../Pages/Menu/Menu/Menu";
import { Oder } from "../Pages/Order/Oder";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/Home/SignUp";
import { PrivateRoute } from "./PrivateRoute";
import { Secret } from "../Pages/Secret/Secret";
import { Dashboard } from "../Layout/Dashboard";
import { Cart } from "../Pages/Dashboard/Cart/Cart";



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
        {
          path: "/secret",
          element: <PrivateRoute><Secret /></PrivateRoute> ,
        },
      ],
    },
    {
      path: "dashboard", 
      element: <Dashboard />,
      children: [
        {
          path: 'cart',
          element: <Cart />
        }
      ]
    }
  ]);