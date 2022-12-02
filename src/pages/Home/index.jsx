import React from "react";
import Banner from "./Banner";
import HomeBlog from "./HomeBlog";
import HomeCard from "./HomeCard";
import HomeContact from "./HomeContact";
import HomeService from "./HomeService";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCard />
      <HomeService />
      <HomeContact />
      <HomeBlog />
    </div>
  );
};

export default Home;
