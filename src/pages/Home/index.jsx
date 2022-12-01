import React from "react";
import Banner from "./Banner";
import HomeBlog from "./HomeBlog";
import HomeCapability from "./HomeCapability";
import HomeCard from "./HomeCard";
import HomeContact from "./HomeContact";
import HomeService from "./HomeService";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCard />
      <HomeCapability />
      <HomeService />
      <HomeContact />
      <HomeBlog />
    </>
  );
};

export default Home;
