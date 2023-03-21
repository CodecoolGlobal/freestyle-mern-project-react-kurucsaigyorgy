import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function SearchBar() {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);

  function handleInput(e) {
    setsearch(e.target.value);
  }

  function handleClick(){
    navigate(`/search/${search}`); 

  }
  


  return (
    <div className="search_bar_div">
      <h1>Find a movie...</h1>
      <input className="search_bar" onInput={(e) => handleInput(e)}></input>
      <button className="search_bar_button" onClick={handleClick}>
        {" "}
        🔍{" "}
      </button>
    </div>
  );
}

export default SearchBar;
