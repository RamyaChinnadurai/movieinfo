import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div class="container">
      <div id="movies" class="row">
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
export default MovieList;
