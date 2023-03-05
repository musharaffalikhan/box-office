import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

import PageNotFound from "./Pages/PageNotFound";

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
