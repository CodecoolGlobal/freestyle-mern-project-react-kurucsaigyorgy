/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesPage from "./components/FavouritesPage";
import SearchBar from "./components/Searchbar";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Recommendations from "./components/Recommendations";


function App() {
  return (
    <div>
      <header>HEADER
      <Menu />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
