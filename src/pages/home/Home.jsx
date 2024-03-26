import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Details from "../deaills/Details";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div style={{ height: 630 }}></div>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
