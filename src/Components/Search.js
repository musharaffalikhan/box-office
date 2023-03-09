import React, { useState } from "react";
import styled from "styled-components";
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
        <SearchInput
          type="text"
          placeholder="Search for something"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <RadiosWrapper>
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
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default Search;

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
