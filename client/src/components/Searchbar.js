import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Favourites({ details }) {
  function handleClick(e) {
    e.target.innerText =  '⭐'
  return   fetch("/api/favourites", {
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
      onClick={(e) => handleClick(e)}
    >
      ✩
     
    </button>
  );
}

function SearchBar() {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);

  function handleInput(e) {
    setsearch(e.target.value);
  }
  function handleClick() {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&query=${search}&page=1&include_adult=false`;
    fetch(url)
      .then((res) => res.json())
      .then((searchResults) => {
        setMoviesDisplayed(searchResults.results);
      });

    setHasSearched(true);
  }

  function titleClick(movie) {
    console.log(`${movie.title}`);
    navigate(`/movie/${movie.id}`, { state: { movie } });
  }

  return hasSearched ? (
    <div className="movies">
      {moviesDisplayed.map((movie, i) => (
        <div className="movie" key={i}>
          <div className="movie-title" onClick={() => titleClick(movie)}>
            {movie.title}
          </div>{" "}
          <Favourites details={{ id: movie.id, name: movie.title }} />
        </div>
      ))}
    </div>
  ) : (
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
