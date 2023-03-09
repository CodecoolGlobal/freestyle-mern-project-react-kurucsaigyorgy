import React from "react";
import { useEffect, useState } from "react";

function Recommendations() {
  const favourites = [];
  useEffect(() => {
    console.log("got heree, first use effect!!!!!!");
    fetch("/api/favourites")
      .then((res) => res.json())
      .then((favouriteMovies) => {
        favouriteMovies.forEach((el) => favourites.push(el.id));
        console.log(favourites);
      });
  }, []);

  console.log("got here: favs", favourites);
  console.log("got here: favs", favourites.length);
  if (favourites.length) {
    fetch(`https://api.themoviedb.org/3/movie/\
        ${
          favourites[Math.floor(Math.random() * favourites.length)]
        }/recommendations?\
        api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&page=1`)
      .then((res) => res.json())
      .then((rec) => console.log('le recommendationes', rec));
  }

  return <div>'saup</div>;
}

export default Recommendations;
