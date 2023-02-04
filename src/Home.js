import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import App from "./App";

import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
