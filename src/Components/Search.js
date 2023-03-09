import React, { useState } from "react";
import CustomRadio from "./CustomRadio";

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");
    const inputs = {
      q: searchInput,
      searchOption,
    };
    onSearch(inputs);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={(e) => {
            setSearchOption(e.target.value);
          }}
        />
             <CustomRadio
          label="Actors"
          name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={(e) => {
              setSearchOption(e.target.value);
            }}
        />
       
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
