import React from 'react'
import { useState } from 'react'


function SearchBar() {
    const [searched, setSearched] = useState('')
    let moviesDisplayed;
    function handleInput(e) {
        setSearched(e.target.value)
    }
    function handleClick(){
        let url = `https://api.themoviedb.org/3/search/movie?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&query=${searched}&page=1&include_adult=false`
        fetch(url).then(res => res.json()).then(movie => moviesDisplayed = movie)
        }


    return (
        <a>
            <input onInput={(e) => handleInput(e)}></input>
            <button onClick={handleClick}>Search</button>
        </a>
    )
}

export default SearchBar