import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import HomeBlog from "./HomeBlog";
import HomeCard from "./HomeCard";
import HomeContact from "./HomeContact";
import HomeProduct from "./HomeProduct";
import HomeService from "./HomeService";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeProduct />
      <HomeService />
      <HomeCard />
      <HomeContact />
      <HomeBlog />
      <Footer />
    </div>
  );
};

export default Home;
