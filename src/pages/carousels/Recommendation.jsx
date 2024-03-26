import React from "react";
import { Carousel } from "../../components";
import useFetch from "../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  console.log(data?.results);
  return (
    <Carousel
      title="Recomendations"
      data={data?.results}
      loading={loading}
      endPoint={mediaType}
    />
  );
};

export default Recommendation;
