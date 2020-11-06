import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Logo from './components/Logo';
import MovieCard from './components/MovieCard';

const App = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(async () => { 
        const response = await fetch('/movies');
        const movies = await response.json();
        setMovieList(movies);
    });

    const setMoviesByFilter = (searchKey) => {
        const newList = moviesList.filter(({Title})=>Title.includes(searchKey));
        setMovieList(newList);
    };

    return (
        <>
            <div className="header">
                <div className="navbar-header">
                    <Logo />
                </div>
                <div className="jumbotron">
                    <Search onSearch={setMoviesByFilter} />
                </div>
            </div>
            <div class="container">
                <div id="movies" class="row">
                    <MovieCard />
                </div>
            </div>
        </>
        );
}
export default App;