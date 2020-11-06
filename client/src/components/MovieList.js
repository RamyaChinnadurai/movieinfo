import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {
    return(
        <div class="container">
            <div id="movies" class="row">
                {
                    movieList.map( val => {
                        return <MovieCard movies={val}/>
                    })
                }
            </div>
        </div>
    )
}

export default MovieList;