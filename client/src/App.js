import React, { useState, useEffect } from "react";
import Header from './components/Header';
import MovieList from './components/MovieList';

const App = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect( async() => {
        const response = await fetch('http://localhost:3000/movies');
        const movies = await response.json();
        setMovieList(movies);
    },[]);

    return (
        <>
        <Header/>
        <MovieList movieList={movieList} />
        </>
    );
};
export default App;
