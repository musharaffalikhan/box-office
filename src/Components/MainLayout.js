import React from "react";
import { Outlet } from "react-router-dom";
import AppTitle from "./AppTitle";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <AppTitle />
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
