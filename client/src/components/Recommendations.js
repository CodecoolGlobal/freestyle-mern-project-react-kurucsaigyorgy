import React from "react";
import { useEffect, useState } from "react";

function Recommendations() {
  const [cucc, setCucc] = useState(null)
  useEffect(() => {
    let favourites = [];
    fetch("/api/favourites")
      .then((res) => res.json())
      .then((favouriteMovies) => {
        favouriteMovies.forEach((el) => favourites.push(el.id));
        console.log(favourites);

        if (favourites.length) {
            console.log(favourites)
          fetch(
            `https://api.themoviedb.org/3/movie/${favourites[Math.floor(Math.random() * favourites.length)]}/recommendations?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&page=1`
          )
            .then((res) => res.json())
            .then((rec) => {
                console.log('rec', rec)
              favourites = rec;
              console.log('!!!!!!!!!!!!!!', favourites)
              setCucc(favourites)
            });
        }
      });
      console.log('got here with favs', favourites)
      
  }, []);

  return !cucc?<div>Loading...</div>:
  <div key={null}>
    {cucc.results.map((el) =>{
        return <div key={el.title}>{el.title}</div>
    })}

  </div>;
}

export default Recommendations;
