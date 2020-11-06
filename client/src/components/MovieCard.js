import React from "react";
import Favicon from "./Favicon";
const MovieCard = () => {
  return (
    <div class="container">
      <div>
        <img class="object-fit-cover" src="${movie.Poster}" />
        <h2 class="movie-title">
          Inside out
          <Favicon />
        </h2>
        <a class="view-details" target="_blank">
          Movie Details
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
