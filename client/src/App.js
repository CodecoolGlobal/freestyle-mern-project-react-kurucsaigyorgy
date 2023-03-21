/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesPage from "./components/FavouritesPage";
import SearchBar from "./components/Searchbar";
/* import HomePage from "./components/HomePage"; */
import Menu from "./components/Menu";
import HeaderComponent from "./components/HeaderComponent";
import MovieDetails from "./components/MovieDetails";
import Recommendations from "./components/Recommendations";
import SearchResultPage from "./components/SearchResultPage";


function App() {
  return (
    <div id="app">
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/search/:search" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
