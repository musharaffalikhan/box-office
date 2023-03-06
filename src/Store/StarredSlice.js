import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};
const StarredSlice = createSlice({
  name: "starred",
  initialState,
  reducers: {
    star(state, action) {
      state.ids.push(action.payload);
      localStorage.setItem("starredShow", JSON.stringify(state.ids));
    },
    unStar(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload);
      localStorage.setItem("starredShow", JSON.stringify(state.ids));
    },
    setIds(state, action) {
      state.ids = action.payload;
      localStorage.setItem("starredShow", JSON.stringify(state.ids));
    },
  },
});

export const starredSliceActions = StarredSlice.actions;
export default StarredSlice;
