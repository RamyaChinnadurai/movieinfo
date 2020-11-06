import React, { useState, useEffect } from "react";
import Header from './components/Header';
import MovieList from './components/MovieList';

let initialList = [];

const App = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect( async() => {
        const response = await fetch('http://localhost:3000/movies');
        const movies = await response.json();
        initialList = movies;
        setMovieList(movies);
    },[]);

    const setMoviesByFilter = (searchKey) => {
        const newList = initialList.filter(({Title}) => Title.includes(searchKey));
        setMovieList(newList);
    }

    return (
        <>
        <Header onSearch={setMoviesByFilter}/>
        <MovieList movieList={movieList} />
        </>
    );
};
export default App;
