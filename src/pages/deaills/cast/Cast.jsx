import React from "react";
import "./style.scss";
import { ContentWrapper, Img } from "../../../components";
import { useSelector } from "react-redux";
import avater from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Casts</div>
        {!loading ? (
          <div className="listItems">
            {data && data.length > 0 ? (
              data.map((item) => {
                let imgUrl = item.profile_path
                  ? url.profile + item.profile_path
                  : avater;
                return (
                  <div key={item.id} className="listItem">
                    <div className="profileImg">
                      <Img src={imgUrl} />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No cast information available</div>
            )}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
