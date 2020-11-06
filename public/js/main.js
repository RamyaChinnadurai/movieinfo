let movieList = [];

document.addEventListener('DOMContentLoaded', function onReady(){
  
  fetchMovies();
  
  document.getElementById('search-form').addEventListener('submit', function onSearchSubmit(e){
    e.preventDefault();


    searchTitle();
    // console.log("Fetch end");
  });

});

const searchTitle = () => {
  const title = document.getElementById('search-text').value.toLowerCase();
  let filter = movieList.filter((data) => {
    let movieTitle = data.Title.toLowerCase();
    return movieTitle.includes(title);
  });
  loadMovies(filter);
}


const fetchMovies = () => {
  const API_BASE = "/movies";
  return fetch(API_BASE)
    .then((res)=>res.json())
    .then((data)=> {
      movieList = data;
      loadMovies(data);
      console.log("Fetch start");
    })
    .catch(err=>console.log(err));
};

const heart = (id) => {
  let movieId = document.getElementById(id);
  let boolean = movieId.getAttribute('data-like')=="true"?false:true;
  fetch(`/movies/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite: boolean,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }); 
  movieId.setAttribute("data-like",boolean);
  if(boolean){
    movieId.style.color = "red";
  }
  else{
    movieId.style.color = "white";
  }
}


function loadMovies(movies){

  var output = '';
  movies.forEach(function(movie){
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
          <span style="color:'${(movie.favorite!=null && movie.favorite)?"red":"white"}';cursor: pointer; font-size:18px;" id="${movie.imdbID}" onclick ="heart('${movie.imdbID}')" data-like="${(movie.favorite!= null && movie.favorite) ? true : false}">&hearts;</span>
          </div>
      </div>
    `;
  })
  
  document.getElementById('movies').innerHTML = output;
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}