/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Favourites from './components/Favourites';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <h1>Narancs, Tetves es Dugo</h1>
      <SearchBar />
      
    </div>
  );
}

export default App;
