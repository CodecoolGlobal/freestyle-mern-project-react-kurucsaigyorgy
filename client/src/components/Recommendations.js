import React from "react";
import { useEffect, useState } from "react";

function Recommendations() {
  const [displayedMovies, setdisplayedMovies] = useState([]);

  useEffect(() => {
    let recommendations = [];
    let favourites = [];

    fetch("/api/favourites")
      .then((res) => res.json())
      .then((favouriteMovies) => {
        favourites = favouriteMovies;

        if (favourites.length) {
          for (let i = 0; i < favourites.length; i++) {
            fetch(
              `https://api.themoviedb.org/3/movie/${favourites[i].id}/recommendations?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&page=1`
            )
              .then((res) => res.json())
              // eslint-disable-next-line no-loop-func
              .then((rec) => {
                for (let a = 0; a < favourites[i].rating; a++) {
                  recommendations.push(rec.results[a]);
                }
                setdisplayedMovies([...recommendations]);
              });
          }
        }
      });
  }, []);

  return (
    <div>
      {displayedMovies.map((el) => {
        if (!el) {
          return null;
        } else {
          return (
            <div className="movie-title" key={el.title}>
              {el.title}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Recommendations;
