import React from "react";
import ThemeSwitcher from "../../ThemeSwitcher/SwitchTheme";
import Navbar from "../../Components/Home/Navbar/Navbar";
import Banner from "../../Components/Home/Banner/Banner";
import OurProducts from "../../Components/Home/OurProducts/OurProducts";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <OurProducts></OurProducts>
    </div>
  );
};

export default Home;
