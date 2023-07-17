import React from "react";
import { movies } from "../data";

const moviesLis = movies.map(movie => (
    <div key={movie.title}> Title:{movie.title} Runtime:{movie.time} minutes
      <ul> {movie.genres.map(genre => (
          <li key={genre}>{genre} </li>
        ))}
      </ul>
    </div>))

function Movies() {
  return (
    <div>
      <h1>Movie Page</h1>
      {moviesLis}
    </div>
  )
}

export default Movies;
