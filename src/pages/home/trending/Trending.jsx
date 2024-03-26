import React, { useState } from "react";
import { ContentWrapper, SwitchTabs, Carousel } from "../../../components";
import "../../home/style.scss";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab == "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="sub_title">
          <span className="carouselTitle">Trending</span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={"Trending"} />
    </div>
  );
};

export default Trending;
