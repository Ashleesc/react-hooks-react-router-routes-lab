import React from "react";
import { directors } from "../data";

const directorsLis = directors.map(
    director => <div key={director.name} > Name:{director.name}
      <ul> {director.movies.map(movie => <li key={movie}>{movie}</li>)} 
      </ul>
    </div>
    )

function Directors() {
  return (
  <div>
      <h1>Directors Page</h1>
      {directorsLis}
  </div>
  )
}

export default Directors;
