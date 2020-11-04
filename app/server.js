const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getMovies, storeMovies } = require("./service/movies");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/movies", async (req, res) => {
  let moviesList = await getMovies();
  res.send(moviesList);
});
app.post("/movies", (req, res) => {
  const { body } = req;
  storeMovies(body);
  res.status(404).redirect("/movies");
});
app.listen(3000, function () {
  console.log("listening on 3000");
});
