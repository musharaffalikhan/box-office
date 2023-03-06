import React, { useState } from "react";
import { searchForActors, searchForShows } from "../Api/ApiService";
import Search from "../Components/Search";

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
    if (apiData) {
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
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
