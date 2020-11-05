const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionString =
  "mongodb+srv://dhanush:dhanush*123@cluster0.alc1w.mongodb.net/omdb";
const connectToDb = async () =>
  MongoClient.connect(connectionString, { useUnifiedTopology: true });
console.log("ConnectToDb", connectToDb);

const getMovies = async () => {
  try {
    const client = await connectToDb();
    const db = client.db("omdb");
    const res = await db.collection("movies").find({});
    return res.toArray();
  } catch (err) {
    console.log(err);
  }
};

const storeMovies = async (data) => {
  const client = await connectToDb();
  const db = client.db("omdb");
  db.collection("movies").insertOne(data);
};

const updateMovies = async (id, data) => {
  const client = await connectToDb();
  const db = client.db("omdb");
  db.collection("movies").updateOne({ "_id": mongodb.ObjectId(id) }, { $set: data });
};

const deleteMovies = async (id) => {
    const client = await connectToDb();
    const db = client.db("omdb");
    db.collection("movies").deleteOne({ "_id": mongodb.ObjectId(id)});
  };

module.exports = { getMovies, storeMovies, updateMovies,deleteMovies };
