import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../Layouts/RootLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser";
import AllProducts from "../Pages/Dashboard/AdminDashboard/AllProducts";
import AllOrders from "../Pages/Dashboard/AdminDashboard/AllOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        Component: ManageUser,
      },
      {
        path: "all-products",
        Component: AllProducts,
      },
      {
        path: "all-orders",
        Component: AllOrders,
      },
    ],
  },
]);
