import React from 'react';
import MovieCard from './moviecard';


const MovieList = ({movielist}) => {
    return (
        <div class="container">
            <div id="movies" class="row">
            {
                movielist.map((movie)=><MovieCard movie={movie} />)
            }
            </div>
        </div>
    );

}

export default MovieList;