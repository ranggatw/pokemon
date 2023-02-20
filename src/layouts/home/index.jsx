import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import "./index.css";

const HomeLayout = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
