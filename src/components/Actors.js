import React from "react";
import { actors } from "../data";

const actorLis = actors.map(actor => <div key={actor.name}>{actor.name}
  <ul key={actor.name}>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
</div>)

function Actors() {

  return (
    <div>
      <h1>Actors Page</h1>
      {actorLis}
    </div>
  )
}

export default Actors;
