import React  from 'react';

 const MovieCard = () => {

    const handleClick = () => {
        console.log("movie details clicked")
    }

    return (
        <div>
            <img class="object-fit-cover" src="https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg" />
            <h2 class="movie-title" >Inside out</h2>
            <a class="view-details" onclick={handleClick} target="_blank" >Movie Details</a>
        </div>
   )
}

export default MovieCard;