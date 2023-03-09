import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../Api/ApiService";
import ShowGrid from "../Components/Shows and actors/ShowGrid";
import { useEffect } from "react";
import { starredSliceActions } from "../Store/StarredSlice";
import { TextCenter } from "../Components/common/TextCenter";

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
    return <TextCenter>No shows are starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <TextCenter>Error occured : {starredShowsError.message}</TextCenter>;
  }
  return (
    <TextCenter>Shows are loading</TextCenter>
  );
};

export default Starred;
