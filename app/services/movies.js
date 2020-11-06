const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://dhusa12:Dhusanthan1@cluster0.poek0.mongodb.net/OMDB?retryWrites=true&w=majority";
// const url = "mongodb+srv://vasan:D2RDFoK7jjcQervL@cluster0.uzn2s.mongodb.net/omdb?retryWrites=true&w=majority";

const connectToDb = async () => MongoClient.connect(url, {useUnifiedTopology: true})
console.log("ConnectToDb", connectToDb)
const {ObjectId} = mongodb;

const getMovies = async () => {
    try{
        console.log("success")
        const client = await connectToDb()
        const db = client.db("OMDB")
        const res = await db.collection("movies").find({})
        // console.log(res);
        return res.toArray()
    } catch(err) {
        console.log(err)
    }
};

const storeMovies = async (data) => {
    try{
    const client = await connectToDb()
    const db = client.db("OMDB")
    db.collection("movies").insertOne(data)
    }
    catch(err){
        console.log(err)
    }
};

const updateMovies = async (id, data) => {
    const client = await connectToDb()
    const db = client.db("OMDB")
    db.collection("movies").updateOne(
        { "imdbID": id },
        { $set: data }
    )
    // console.log(data1)
};

const deleteMovies = async (id) => {
    const client = await connectToDb()
    const db = client.db("OMDB")
    db.collection("movies").removeOne(
        { "_id": ObjectId(id) }
    )
};


module.exports = {getMovies, storeMovies, updateMovies, deleteMovies};
