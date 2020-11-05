const express = require('express');
const parser=require("body-parser");
const app = express();
const { getMovies,storeMovies,updateMovies,deleteMovies } = require('./services/movies');

app.use(express.static('public'));
app.use(parser.json())
app.get("/movies", async (req, res) => {
    const moviesList = await getMovies()
    // console.log(moviesList)
    res.send(moviesList)
})

app.post("/movies",(req,res)=>{
    const {body}=req
    storeMovies(body)
    res.send({"type":"post"})
})

app.patch("/movies/:id",(req,res)=>{
    const {body}=req
    const id=req.params.id;
    updateMovies(id,body);
    res.send({"type":"patch"})

})
app.delete("/movies/:id",(req,res)=>{
    const id=req.params.id;
    deleteMovies(id);
    res.send({"type":"delete"})

})
app.listen(3000, function() {
    console.log('listening on 3000')
})