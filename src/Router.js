import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Homepage from "./Pages/Homepage";

import PageNotFound from "./Pages/PageNotFound";
import Starred from "./Pages/Starred";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
