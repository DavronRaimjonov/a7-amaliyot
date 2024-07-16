import React from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-[90%] m-auto">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
