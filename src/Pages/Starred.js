import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../Api/ApiService";
import ShowGrid from "../Components/Shows and actors/ShowGrid";
import { useEffect } from "react";
import { starredSliceActions } from "../Store/StarredSlice";

const Starred = () => {
  const dispatch = useDispatch();
  const starredShowsIds = useSelector((state) => state.starred.ids);
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    const storedIds = localStorage.getItem("starredShow");
    if (storedIds) {
      dispatch(starredSliceActions.setIds(JSON.parse(storedIds)));
    }
  }, [dispatch]);

  if (starredShows?.length === 0) {
    return <div>No shows are starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <div>Error occured : {starredShowsError.message}</div>;
  }
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Starred;
