import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Menu } from "../Pages/Menu/Menu/Menu";
import { Oder } from "../Pages/Order/Oder";



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
          path: "order",
          element: <Oder /> ,
        },
      ],
    },
  ]);