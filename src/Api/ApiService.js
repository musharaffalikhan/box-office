import axios from "axios"

const BASE_URL = `https://api.tvmaze.com`;
const ApiGet = async (queryStrings) => {
  const response = await axios.get(`${BASE_URL}${queryStrings}`);
  const body = await response.data;
  return body;
};

export const searchForShows = (query) => ApiGet(`/search/shows?q=${query}`);

export const searchForActors = (query) => ApiGet(`/search/people?q=${query}`);
