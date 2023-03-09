import React from 'react';
import useEffect from 'react'

function FavouritesPage(){
   fetch('/api/favourites')
   .then(res => res.json())
   .then(favourites => console.log(favourites))

      return (
       <h1>FAVOURITES PAGE</h1>
      )
}

export default FavouritesPage
