import React from "react";
import MovieCard from "./movieCard";

const MovieList = () => {
  return (
    <div className="container">
      <div id="movies" className="row">
        <MovieCard />
      </div>
    </div>
  );
};
export default MovieList;
