import React from "react";
import { actors } from "../data";

function Actors() {
  const eachActor = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {eachActor}
    </div>
  );
}

export default Actors;
