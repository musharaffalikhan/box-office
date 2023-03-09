import axios from "axios"

const BASE_URL = `https://api.tvmaze.com`;
const ApiGet = async (queryStrings) => {
  const response = await axios.get(`${BASE_URL}${queryStrings}`);
  const body = await response.data;
  return body;
};

export const searchForShows = (query) => ApiGet(`/search/shows?q=${query}`);

export const searchForActors = (query) => ApiGet(`/search/people?q=${query}`);

export const getShowsById = (showId) => ApiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async(showsId) => {
    const promises = showsId.map(showId => ApiGet(`/shows/${showId}`));
    const result = await Promise.all(promises);
    return result;
}
