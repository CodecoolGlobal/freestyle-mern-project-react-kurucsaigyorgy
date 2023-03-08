import React from 'react'
import { useState } from 'react'

function Favourites({details}){
    function handleClick(val){
        console.log(val, details.name);
        fetch('/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"id": val, "title": details.name}), 
          });
    }
   

      return (
        <button className='favourite' value={details.id} onClick={e=>handleClick(e.currentTarget.value)}>{details.id}</button>
      )
}

function SearchBar() {
    const [search, setsearch] = useState('')
    const [hasSearched, setHasSearched] = useState(false)
    const [moviesDisplayed, setMoviesDisplayed] = useState([])
    
    
    function handleInput(e) {
        setsearch(e.target.value)
    }
    function handleClick(){
        let url = `https://api.themoviedb.org/3/search/movie?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&query=${search}&page=1&include_adult=false`
        fetch(url).then(res => res.json()).then(searchResults => {
            setMoviesDisplayed(searchResults.results)
            
        })
       

        setHasSearched(true)
        }

    return hasSearched?(
       <div>{moviesDisplayed.map((movie, i)=> <><div key={i}>{movie.title}</div> <Favourites details={{id:movie.id, name: movie.title}}/></>)}</div>
    ):(
        <div>
            <input onInput={(e) => handleInput(e)}></input>
            <button onClick={handleClick}>Search</button>
            
        </div>
    )
}

export default SearchBar