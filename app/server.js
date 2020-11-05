const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const moviesDB = require('./services/movies');
const connectToMongo = require('./config/db');

const app = express();
dotenv.config();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(connectToMongo(app));

app.get('/movies', async (req, res) => {
    const movieList = await moviesDB.getMovies(req.database);
    res.send(movieList);
});

app.post('/movies', async (req, res) => {
    try{
        await moviesDB.insertMovie(req.database, req.body);
        res.send({ status: true });
    }catch(err){
        res.send({ status: false });
    }
});

app.patch('/movies/:id', async (req, res) => {
    const payload = {
        movieID: req.params.id,
        param: req.body
    };

    try{
        await moviesDB.updateMovie(req.database, payload)
        res.send({ status: true });
    }catch(err){
        res.send({ status: false });
    }
    
});

app.delete('/movies/:id', async (req, res) => {
    const movieID = req.params.id;
    try{
        await moviesDB.deleteMovie(req.database, movieID);
        res.send({ status: true });
    }catch(err){
        res.send({ status: false });
    }
});

app.listen(3000, function() {
    console.log('listening on 3000');
})