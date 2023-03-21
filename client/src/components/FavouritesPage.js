import React from 'react';
import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";


function FavouritesPage(){

  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([])
  useEffect(()=>{
    fetch('/api/favourites')
   .then(res => res.json())
   .then(favouriteMovies => setFavourites(favouriteMovies))
    console.log(favourites);
   
  }, [])
   
  console.log('here', favourites );

  function titleClick(film) {
    navigate(`/movie/${film}`, { state: { film } });
  }

      return (
        <div>
       {favourites.map((film) => {
        
        return <><div className='movie-title' key={film.title} id={film.id} onClick={(e) => titleClick(e.target.id)} >{film.title}</div> <br></br></>
       })}
       </div>
      )
}

export default FavouritesPage
