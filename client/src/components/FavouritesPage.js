import React from 'react';
import {useEffect, useState} from 'react'

function FavouritesPage(){
  const [favourites, setFavourites] = useState([])
  useEffect(()=>{
    fetch('/api/favourites')
   .then(res => res.json())
   .then(favouriteMovies => setFavourites(favouriteMovies))
   
  }, [])
   
  function handleChange(e){
    setFavourites([...favourites])
    fetch('/api/favourites', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieTitle: e.target.className, rating: e.target.value}),

    })

  }

      return (
        <div>
       {favourites.map((film) => {
        return <><div className='movie-title' key={film.title}>{film.title}</div> 
        <select className={film.title} onChange={(e)=>handleChange(e)}>
        <option value='0' >✩</option>
  <option value='1' selected>⭐</option>
  <option  value="2">⭐⭐</option>
  <option value="3">⭐⭐⭐</option>
  <option  value="4">⭐⭐⭐⭐</option>
</select>
<br></br></>
       })}
       </div>
      )
}

export default FavouritesPage
