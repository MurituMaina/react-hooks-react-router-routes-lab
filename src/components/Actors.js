import React from "react";
import { actors } from "../data";

function Actors() {
    let actorList = actors.map((actor,ind)=> {
    let movies = actor.movies
    let movie = movies.map((movie, ind) =>{
      return(
        <li key={ind+1}>{movie}</li>
      )
    })
    return(
      <div key={ind+1}>{actor.name}
      <ul>{movie}</ul>
      </div>
    )
  })
  return( <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actorList}
  </div>)
}

export default Actors;
