import React from "react";
import ShowCard from "./Reusable Cards/ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : "/Imagenotfound.png"
          }
          summary={data.show.summary}
        />
      ))}
    </>
  );
};

export default ShowGrid;
