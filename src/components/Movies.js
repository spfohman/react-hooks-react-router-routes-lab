import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies.title);
  const eachMovie = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time}</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {eachMovie}
    </div>
  );
}

export default Movies;
