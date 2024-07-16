import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Like from "../pages/like";
import MainLayout from "../components/main-layout";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/like" element={<Like />} />
      </Route>
    </Routes>
  );
};

export default Root;
