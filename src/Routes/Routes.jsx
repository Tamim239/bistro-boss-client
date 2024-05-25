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
import { AllUsers } from "../Pages/Dashboard/AllUsers/AllUsers";
import { AddItems } from "../Pages/Dashboard/AddItems/AddItems";
import { AdminRoute } from "./AdminRoute";
import { ManageItems } from "../Pages/Dashboard/ManageItem/ManageItems";
import { UpdateItem } from "../Pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Oder />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal user
      {
        path: "cart",
        element: <Cart />,
      },

      // admin routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems /></AdminRoute>

      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`)

      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
