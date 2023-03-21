import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchResultPage() {
  const navigate = useNavigate();

  /*     const [hasSearched, setHasSearched] = useState(false); */
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);

  const pathSegments = window.location.pathname.split("/");
  const searchTerm = pathSegments.pop();
  console.log(searchTerm);

  let url = `https://api.themoviedb.org/3/search/movie?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
  fetch(url)
    .then((res) => res.json())
    .then((searchResults) => {
      setMoviesDisplayed(searchResults.results);
    });

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
        ⭐
      </button>
    );
  }

  function titleClick(movie) {
    console.log(`${movie.title}`);
    navigate(`/movie/${movie.id}`, { state: { movie } });
  }

  return (
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
  );
}

export default SearchResultPage;
