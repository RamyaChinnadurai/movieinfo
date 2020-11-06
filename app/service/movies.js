const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://vasan:D2RDFoK7jjcQervL@cluster0.uzn2s.mongodb.net/omdb?retryWrites=true&w=majority";
const connectToDb = async () =>
  MongoClient.connect(uri, { useUnifiedTopology: true });
const getMovies = async (res) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db.collection("movies").find({});
    const movies = await response.toArray();
    res.send(movies);
  } catch (error) {
    console.log("Error" + error);
    return res.status(404).json({ Error: "File not found" });
  }
};
const storeMovies = async (data, res) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db.collection("movies").insertOne(data);
    res.json({ Message: "Successfully uploaded" });
  } catch (error) {
    console.log("Error" + error);
    return res.status(404).json({ Error: "File not found" });
  }
};

const getMovieWithId = async (id, res) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db.collection("movies").findOne({ imdbID: id });
    res.send(response);
  } catch (error) {
    console.log("Error" + error);
    return res.status(404).json({ Error: "File not found" });
  }
};
const updateMovieWithId = async (id, data, res) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db
      .collection("movies")
      .updateOne({ imdbID: id }, { $set: data });
    res.json({ Message: "Successfully updates" });
  } catch (error) {
    console.log("Error" + error);
    return res.status(404).json({ Error: "File not found" });
  }
};

const deleteMovieWithId = async (id, res) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db.collection("movies").deleteOne({ imdbID: id });
    res.json({ Message: "Successfully deleted" });
  } catch (error) {
    console.log("Error" + error);
    return res.status(404).json({ Error: "File not found" });
  }
};
module.exports = {
  getMovies: getMovies,
  storeMovies: storeMovies,
  getMovieWithId: getMovieWithId,
  updateMovieWithId: updateMovieWithId,
  deleteMovieWithId: deleteMovieWithId,
};
