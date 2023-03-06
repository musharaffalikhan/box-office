import { configureStore } from "@reduxjs/toolkit";
import StarredSlice from "./StarredSlice";

 const store = configureStore({
    reducer:{starred:StarredSlice.reducer}
})
export default store;