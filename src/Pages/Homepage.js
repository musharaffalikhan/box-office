import React, { useState } from "react";
import { searchForActors, searchForShows } from "../Api/ApiService";

import Search from "../Components/Search";
import ActorsGrid from "../Components/Shows and actors/ActorsGrid";
import ShowGrid from "../Components/Shows and actors/ShowGrid";


const Homepage = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearchSubmitHandler = async ({ q, searchOption }) => {
    try {
      setApiError(null);
      if (searchOption === "shows") {
        const res = await searchForShows(q);
        setApiData(res);
      } else {
        const res = await searchForActors(q);
        setApiData(res);
      }
    } catch (error) {
      setApiError(error);
    }
  };

  const renderApiData = () => {
    if (apiError) {
      return <div>Error occured : {apiError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No results</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <>
      <Search onSearch={onSearchSubmitHandler} />
      <div>{renderApiData()}</div>
    </>
  );
};

export default Homepage;
