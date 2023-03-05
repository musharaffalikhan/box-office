import React, { useState } from "react";
import { ApiGet } from "../Api/ApiService";

const Homepage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    setSearchInput("");
    try {
      setApiError(null);
      const res = await ApiGet(`/search/shows?q=${searchInput}`);
      setApiData(res);
    } catch (error) {
      setApiError(error);
    }
  };
  const renderApiData = () => {
    if (apiData) {
      return apiData.map((data) => (
        <li key={data.show.id}>{data.show.name}</li>
      ));
    }
    if (apiError) {
      return <div>Error occured : {apiError.message}</div>;
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Homepage;
