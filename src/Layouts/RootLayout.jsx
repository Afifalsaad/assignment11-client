import React from "react";
import Navbar from "../Components/Home/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
