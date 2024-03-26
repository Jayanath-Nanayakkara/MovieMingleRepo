import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { Img, ContentWrapper } from "../../../components";

const HeroBanner = () => {
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  const SearchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const bg =
        url.backdrop +
          data.results[Math.floor(Math.random() * data.results.length)]
            ?.backdrop_path || "";
      setBackGround(bg);
    }
  }, [data]);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <img src={backGround} alt="Backdrop" />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">Explore Endless Entertainment</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search Now...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={SearchQueryHandler}
            />
            <button onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
