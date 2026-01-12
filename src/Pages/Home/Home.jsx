import React from "react";

import Banner from "../../Components/Home/Banner/Banner";
import OurProducts from "../../Components/Home/OurProducts/OurProducts";
import HowItWorks from "../../Components/Home/HowItWorks/HowItWorks";
import FeedBack from "../../Components/Home/FeedBack/FeedBack";
import WhyChooseUs from "../../Components/Home/WhyChooseUs/WhyChooseUs";
import SecurityFeatures from "../../Components/Home/SecurityFeatures/SecurityFeatures";
import useAuth from "../../Hooks/useAuth";
import LoadingSpinner from "../Loading/Loading";
import NewsLetter from "../NewsLetter/NewsLetter";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-11/12 mx-auto">
      <Banner></Banner>
      <OurProducts></OurProducts>
      <HowItWorks></HowItWorks>
      <FeedBack></FeedBack>
      <WhyChooseUs></WhyChooseUs>
      <ContactUs></ContactUs>
      <SecurityFeatures></SecurityFeatures>
      <NewsLetter></NewsLetter>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
