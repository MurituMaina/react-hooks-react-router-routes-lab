import React from "react";
import { directors } from "../data";


function Directors() {
    let directorList = directors.map((director, ind) => {
    let movies= director.movies
    let movie = movies.map((movie, ind)=>{
      return(
        <li key={ind+1}>{movie}</li>
      )
    })
    return(<div key={ind}>{director.name}

<ul>{movie}</ul>
    </div>)



  })
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {directorList}
  </div>;
}

export default Directors;
