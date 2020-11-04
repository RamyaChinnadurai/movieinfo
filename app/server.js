const express = require('express');
const app = express();
const { getMovies } = require('./services/movies');

app.use(express.static('public'));

app.get('/movies', async(req, res) => {
    const movieList = await getMovies();
    res.send(movieList);
})

app.listen(3000, function() {
    console.log('listening on 3000')
})
