const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://vasan:D2RDFoK7jjcQervL@cluster0.uzn2s.mongodb.net/omdb?retryWrites=true&w=majority";
const connectToDb = async () =>
  MongoClient.connect(uri, { useUnifiedTopology: true });
const getMovies = async () => {
  try {
    console.log("success");
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db.collection("movies").find({});
    return response.toArray();
  } catch (error) {
    console.log("Error" + error);
  }
};
const storeMovies = async (data) => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const response = await db
      .collection("movies")
      .insertOne(data, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
  } catch (error) {
    console.log("Error" + error);
  }
};

module.exports = { getMovies: getMovies, storeMovies: storeMovies };
