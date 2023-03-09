import React from "react";

function Recommendations() {
fetch("https://api.themoviedb.org/3/movie/8008/recommendations?api_key=856cfdccc26bfd6f158554be3cfbbdf7&language=en-US&page=1")
.then(res => res.json())
.then(rec => console.log(rec))

    return (
        <div>'saup</div>
    )
}

export default Recommendations