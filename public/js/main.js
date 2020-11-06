


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
      <div class="container" id="${movie.imdbID}">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title} <svg data-favourite="${Boolean(movie.Favourite)}" class="${movie.Favourite ? 'favourite-on': 'favourite-off'}" onclick="toggleFavourite('${movie.imdbID}')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#DC143C" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
        </div>
      </div>
    `;
  })
  
  document.getElementById('movies').innerHTML = output;
}

function toggleFavourite(id){
  const previousValue = document.querySelector(`#${id} svg`).getAttribute('data-favourite');
  const newValue = previousValue === "false" ? "true" : "false";
  const className = newValue === "false" ? "favourite-off" : "favourite-on";
  document.querySelector(`#${id} svg`).setAttribute('data-favourite', newValue);
  document.querySelector(`#${id} svg`).setAttribute('class', className);

  fetch(`/movies/${id}`,{
    method: 'PATCH',
    body: JSON.stringify({
      Favourite: newValue === "false" ? false : true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res)=>res.json())
    .then(()=> {
      console.log("Sync to DB")
    })
    .catch(err=>console.log(err));
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}