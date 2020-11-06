
const getMovies = async (db, ) => db.collection('movies').find({}).toArray();

const insertMovie = async (db, movieItem) => db.collection('movies').insertOne(movieItem);

const updateMovie = async (db, {movieID, params}) => db.collection('movies').updateOne({ imdbID: movieID },{ $set: params });

const deleteMovie = async (db, movieID) => db.collection('movies').removeOne({ imdbID: movieID });

module.exports = {
    getMovies,
    insertMovie,
    updateMovie,
    deleteMovie
}
