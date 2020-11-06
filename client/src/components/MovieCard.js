import React  from 'react';
import FavouriteIcon from './FavouriteIcon';

 const MovieCard = (props) => {
     console.log('props: ', props);
     const { Title, Poster} = props.movies

    const handleClick = () => {
        console.log("movie details clicked")
    }

    return (
        <div>
            <img className="object-fit-cover" src={Poster} />
            <h2 className="movie-title" >{Title}<FavouriteIcon /></h2>
            <a className="view-details" onClick={handleClick} target="_blank" >Movie Details</a>
        </div>
   )
}

export default MovieCard;