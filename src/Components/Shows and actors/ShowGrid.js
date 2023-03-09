import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { starredSliceActions } from "../../Store/StarredSlice";

import ShowCard from "./Reusable Cards/ShowCard";

const ShowGrid = ({ shows }) => {
  const isStarred = useSelector((state) => state.starred.ids);
  const dispatch = useDispatch();
 

  const onStarmeClick = (newId) => {
    if (isStarred.includes(newId)) {
      dispatch(starredSliceActions.unStar(newId));
    }
    if (!isStarred.includes(newId)) {
      dispatch(starredSliceActions.star(newId));
    }
    return;
  };
  useEffect(()=>{
    const storedIds = localStorage.getItem('starredShow');
    if(storedIds){
      dispatch(starredSliceActions.setIds(JSON.parse(storedIds)))
    }
  },[dispatch]);
  

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
          onClick={onStarmeClick}
          isStarred={isStarred.includes(data.show.id)}
        />
      ))}
    </>
  );
};

export default ShowGrid;
