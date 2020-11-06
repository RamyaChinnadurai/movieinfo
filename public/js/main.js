


document.addEventListener('DOMContentLoaded', async function onReady(){
    
  var moviesList = await fetchMovies();
  document.getElementById('search-text').addEventListener('change', function onSearchSubmit(e){
    const searchKey = e.target.value;
    let filterList = moviesList.filter(({Title})=>Title.includes(searchKey));
    loadMovies(filterList);
  });

});

const fetchMovies = () => {
  const API_BASE = "/movies?";
  return fetch(API_BASE)
    .then((res)=>res.json())
    .then((movieList)=> {
      loadMovies(movieList);
      return movieList;
    })
    .catch(err=>console.log(err));
};

function loadMovies(movies){

  var output = '';
  movies.forEach(function(movie){
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
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