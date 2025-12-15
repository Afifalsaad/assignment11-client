import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Footer/Footer";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home";
    } else if (path === "/login") {
      document.title = "Login";
    } else if (path === "/register") {
      document.title = "Register";
    } else if (path === "/all-products") {
      document.title = "All Products";
    } else if (path === "/my-profile") {
      document.title = "My Profile";
    } else if (path.startsWith("/productDetails/")) {
      document.title = "Product Details";
    } else if (path.startsWith("/order-product/")) {
      document.title = "Order Product";
    } else if (path.startsWith("/trackings-log/")) {
      document.title = "Track Order";
    }
  }, [location.pathname]);
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
