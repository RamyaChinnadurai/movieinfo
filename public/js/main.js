
document.addEventListener('DOMContentLoaded', function onReady(){
    
  var a = 5;
  fetchMovies()
  var b = 10;
  document.getElementById('search-form').addEventListener('submit', function onSearchSubmit(e){
    e.preventDefault();
  
    const title = document.getElementById('search-text').value;
    
    filterMovies(title.toUpperCase())
  });

});
let movies = [];
const fetchMovies = () => {
  const API_BASE = "/movies"
  return fetch(API_BASE)
    .then( res =>res.json())
    .then( data => {
      loadMovies(data)
      movies = data
    })
    .catch(err=>console.log(err))
}
const filterMovies = title => {
  let moviesTitle = []
  movies.forEach(movie => {
    let mTitle = movie.Title.toUpperCase()
    mTitle.includes(title) ? moviesTitle.push(movie): {}
  })
  loadMovies(moviesTitle)
}

const favourite = id => {
  let fav = document.getElementById(id)
  let favAttr = fav.getAttribute("data-fav")

  fetch(`/movies/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      favourite: (favAttr == "true")? false : true
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  if(favAttr == "false") {
    fav.setAttribute("data-fav", "true")
  } else {
    fav.setAttribute("data-fav", "false")
  }
  checkColor(id)
}
const checkColor = id => {
  let fav = document.getElementById(id)
  if(fav.getAttribute("data-fav") == "false") {
    fav.style.color = "grey"
  } else {
    fav.style.color = "red"
  }
  console.log(id)
}
function loadMovies(movies){
  var output = '';
  movies.forEach(movie => {
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>

          <span id='${movie.imdbID}' data-fav='${(movie.favourite != null && movie.favourite == true)? true: false}' 
          onclick="favourite('${movie.imdbID}')" 
          style="font-size: 40px; cursor: pointer;
          color:${(movie.favourite != null && movie.favourite == true)? 'red': 'grey'}"
          >&hearts;</span>

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