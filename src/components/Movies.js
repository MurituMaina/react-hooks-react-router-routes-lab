import React from "react";
import { movies } from "../data";

function Movies() {
  let moviesList = movies.map((movie, ind) => {
    let gen = movie.genres;
    let genreList = gen.map((genre, ind) => {
      return <li key={ind}>{genre}</li>;
    });

    return (
      <div key={ind + 1}>
        {movie.title} {movie.time}
        <ul>{genreList}</ul>
      </div>
    );
  });
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>

      {moviesList}
    </div>
  );
}

export default Movies;
