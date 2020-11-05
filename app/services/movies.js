const mongodb = require("mongodb");
const { connected } = require("process");
const { ObjectId } = require("mongodb")
const MongoClient = mongodb.MongoClient;

const connectionString = "mongodb+srv://nanthakumar_17:nanthakumar0123@cluster0.dn0ie.mongodb.net";


const connectToDb = async() => MongoClient.connect(connectionString,{useUnifiedTopology:true});
// console.log("connect : ",connectT);

const getMovies = async () => {
    try{
        const client = await connectToDb()
        const db = client.db("omdb")
        const res = await db.collection("movies").find({})
        console.log("success")
        const data= await res.toArray();
        return data;
    } catch(err) {
        console.log(err)
    }
}


const storeMovies = async (data) => {
    try{
        const client = await connectToDb()
        const db = client.db("omdb")
        db.collection("movies").insertOne(data)

    } catch(err) {
        console.log(err)
    }
}
const updateMovies = async (id,data) => {
    const client = await connectToDb()
        const db = client.db("omdb")
        db.collection("movies").updateOne(
            { "_id": ObjectId(id) },
            { $set: data }
        )
}
const deleteMovies = async (id) => {
    const client = await connectToDb()
        const db = client.db("omdb")
        db.collection("movies").deleteOne(
            { "_id": ObjectId(id) }
        )
}

module.exports = {getMovies,storeMovies,updateMovies,deleteMovies}
