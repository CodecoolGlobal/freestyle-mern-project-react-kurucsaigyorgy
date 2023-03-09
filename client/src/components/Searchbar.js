import React from "react";
import { useState, useEffect } from "react";

function Favourites({ details }) {
  function handleClick() {
    console.log(details.id, details.name);
    fetch("/api/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: details.id, title: details.name }),
    });
  }

  return (
    <button
      className="favourite"
      onClick={(e) => handleClick(e.currentTarget.value)}
    >
      {details.id}
    </button>
  );
}

function SearchBar() {
  const [search, setsearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);

  function handleInput(e) {
    setsearch(e.target.value);
  }
  function handleClick() {
    if (search.length > 0) {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&query=${search}&page=1&include_adult=false`;
      fetch(url)
        .then((res) => res.json())
        .then((searchResults) => {
          setMoviesDisplayed(searchResults.results);
        });

      setHasSearched(true);
    }
  }

  return hasSearched ? (
    <div>
      {moviesDisplayed.map((movie, i) => {
        return (
          <div key={movie.id}>
            <div>{movie.title}</div>
            <Favourites details={{ id: movie.id, name: movie.title }} />
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <input onInput={(e) => handleInput(e)}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
