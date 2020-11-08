import React from 'react';
import FavIcon from './favicon';


const MovieCard = ({movie}) => {
    const {Title,Poster,Favourite,imdbID}=movie;
    
    let obj={Favourite,imdbID};
    //console.log(obj);
    return (
        <div class="container">
            <div>
                <img class="object-fit-cover" src={Poster} />
                <h2 class="movie-title" >{Title} <FavIcon obj={obj} /> </h2>
                <a class="view-details" target="_blank" >Movie Details</a>
            </div>
        </div>
    );

}

export default MovieCard;