import React from 'react';
import FavouriteIcon from './FavouriteIcon';

const MovieCard = ({movies}) => {
    const { Title, Poster } = movies
    return (
        <div className="container">
            <div>
              <img className="object-fit-cover" src={Poster} />
              <h2 className="movie-title">
                { Title}
                <FavouriteIcon />
              </h2>
              <a className="view-details" target="_blank">
                Movie Details
              </a>
            </div>
          </div>
    )
}

export default MovieCard;