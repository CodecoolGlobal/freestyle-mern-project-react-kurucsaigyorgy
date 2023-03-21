import React from 'react';
import {useEffect, useState} from 'react'

function FavouritesPage(){
  const [favourites, setFavourites] = useState([])
  useEffect(()=>{
    fetch('/api/favourites')
   .then(res => res.json())
   .then(favouriteMovies => setFavourites(favouriteMovies))
    console.log(favourites);
   
  }, [])
   
  console.log('here', favourites );

      return (
        <div>
       {favourites.map((film) => {
        return <><div className='movie-title' key={film.title}>{film.title}</div> <br></br></>
       })}
       </div>
      )
}

export default FavouritesPage
