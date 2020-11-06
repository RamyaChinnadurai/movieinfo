import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Logo from './components/Logo';
import MovieList from './components/MovieList';
import MyFavourites from './components/MyFavourites';

const App = () => {
    const [movieList, setMovieList] = useState([]);
    
    useEffect(async () => { 
        const response = await fetch('http://localhost:3000/movies');
        const movies = await response.json();
        setMovieList(movies);
    },[]);

    const setMoviesByFilter = (searchKey) => {
        const newList = movieList.filter(({Title})=>Title.includes(searchKey));
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
                    <MyFavourites style={{alignSelf:'flex-end',marginLeft:'auto'}} />
                </div>
            </div>
            <div classname="container">
                <div id="movies" className="row">
                    <MovieList movieList={movieList} />
                </div>
            </div>
        </>
        );
}
export default App;