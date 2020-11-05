const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const { getMovies, storeMovies, updateMovies, deleteMovies } = require('./services/movies');

app.use(bodyParser.json());

app.use(express.static("public"))

app.get("/movies", async (req, res) => {
    const moviesList = await getMovies()
    res.send(moviesList)
})

app.post("/movies", (req, res) => {
    const { body } = req
    storeMovies(body)
    res.send({"type" : "POST"})
})

app.patch("/movies/:id", (req, res) => {
    const { body } = req
    const id = req.params.id
    updateMovies(id, body)
    res.send({"type" : "PATCH"})
})

app.delete("/movies/:id", (req, res) => {
    const id = req.params.id
    deleteMovies(id)
    res.send({"type" : "DELETE"})
})

app.listen(4000, function() {
    console.log('listening on 4000')
})