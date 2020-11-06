import React from "react";
import SvgComp from "./svgComp";
const MovieCard = () => {
  return (
    <div className="container">
      <div>
        <img className="object-fit-cover" src="${movie.Poster}" />
        <h2 className="movie-title">
          Inside out
          <SvgComp />
        </h2>
        <a className="view-details" target="_blank">
          Movie Details
        </a>
      </div>
    </div>
  );
};
export default MovieCard;
