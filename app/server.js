const express = require('express');
const app = express();
const { getMovies } = require('./services/movies');

app.use(express.static("public"))

app.get("/movies", async (req, res) => {
    const moviesList = await getMovies()
    res.send(moviesList)
})

app.listen(4000, function() {
    console.log('listening on 4000')
})