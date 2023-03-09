import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Homepage from "./Pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageNotFound from "./Pages/PageNotFound";
import Show from "./Pages/Show";
import Starred from "./Pages/Starred";
import { GlobalTheme } from "./Theme";

const Router = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/starred" element={<Starred />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/show/:showId" element={<Show />} />
            </Routes>
          </BrowserRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </>
  );
};

export default Router;
