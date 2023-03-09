/* import { useState, useEffect } from "react"; */
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function MovieDetails(props) {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US`;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((movie) => setMovie(movie));
  }, []);

  if (!movie) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
}

return (
    <div className="detail_page_div">
{/*     const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; */}
      <h1 id="detail_page_h1">{movie.title}</h1>
      <p id="detail_page_p"> {movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {movie.poster_path && (
        <img className="detail_page_img"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title + "Poster Image"}
        />
      )}
    </div>
  );
}

export default MovieDetails;
