import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import HomeBlog from "./HomeBlog";
import HomeCard from "./HomeCard";
import HomeContact from "./HomeContact";
import HomeService from "./HomeService";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeService />
      <HomeCard />
      <HomeContact />
      <HomeBlog />
      <Footer />
    </div>
  );
};

export default Home;
