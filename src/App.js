import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Registation from "./Registation";
import HomePage from "./HomePage";
import Home from "./Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registation" element={<Registation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
