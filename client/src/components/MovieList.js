import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {
    return (
        <>
            { movieList.map( val => {
                return <MovieCard  movies={val}/>
            })}
        </>
    )
}

export default MovieList;