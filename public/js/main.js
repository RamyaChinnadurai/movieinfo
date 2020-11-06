let moviesArray = [];
document.addEventListener("DOMContentLoaded", function onReady() {
  var a = 5;
  fetchMovies("Inside");
  var b = 10;
  document
    .getElementById("search-form")
    .addEventListener("submit", function onSearchSubmit(e) {
      e.preventDefault();
      const title = document.getElementById("search-text").value;

      filterMovies(title);

      console.log("Fetch end");
    });
});

const filterMovies = (title) => {
  title = title.toLowerCase();
  const movies = moviesArray.filter((movie) => {
    if (movie.Title.toLowerCase().includes(title)) return movie;
  });
  loadMovies(movies);
};

const fetchMovies = () => {
  const API_BASE = "/movies";
  return fetch(API_BASE)
    .then((res) => res.json())
    .then((data) => {
      moviesArray = data;
      loadMovies(data);
      console.log("Fetch start");
    })
    .catch((err) => console.log(err));
};

function loadMovies(movies) {
  var output = "";
  movies.forEach(function (movie) {
    output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${
            movie.imdbID
          }')" target="_blank" >Movie Details</a>
          <span id="fav" class=${movie._id} onclick="changeFavourite('${
      movie.imdbID
    }',${movie.favourite},'${movie._id}')">${
      movie.favourite ? "&#9829;" : "&#9825;"
    }</span>
        </div>
      </div>
    `;
  });

  document.getElementById("movies").innerHTML = output;
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

async function changeFavourite(id, isfavourite, movieid) {
  const response = await fetch(`/movie/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favourite: !isfavourite,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  if (data.Message) {
    let heart = document.getElementsByClassName(movieid)[0];
    if (heart.innerHTML === "♥") {
      heart.innerHTML = "♡";
    } else {
      heart.innerHTML = "♥";
    }
  }
}
