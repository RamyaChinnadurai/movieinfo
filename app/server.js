const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  getMovies,
  storeMovies,
  getMovieWithId,
  updateMovieWithId,
  deleteMovieWithId,
} = require("./service/movies");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/movies", (req, res) => {
  getMovies(res);
});

app.post("/movies", (req, res) => {
  const { body } = req;
  storeMovies(body, res);
});
app.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  getMovieWithId(id, res);
});
app.patch("/movie/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  updateMovieWithId(id, body, res);
});
app.delete("/movie/:id", (req, res) => {
  const { id } = req.params;
  deleteMovieWithId(id, res);
});
app.listen(3000, function () {
  console.log("listening on 3000");
});
