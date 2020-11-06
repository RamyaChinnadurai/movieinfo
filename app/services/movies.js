const { ObjectId } = require("mongodb")

const MongoClient = require("mongodb").MongoClient

const url = "mongodb+srv://gokul:gokul2781@chatcatdb.odn9j.mongodb.net/OMDB?retryWrites=true&w=majority"

const connectToDb = async () => MongoClient.connect(url, {useUnifiedTopology: true})

const getMovies = async () => {
    try{
        const client = await connectToDb()
        const db = client.db("OMDB")
        const res = await db.collection("movies").find({})
        console.log("success")
        return res.toArray()
    } catch(err) {
        console.log(err)
    }
}

const storeMovies = async (data) => {
    const client = await connectToDb()
    const db = client.db("OMDB")
    db.collection("movies").insertOne(data)
}

const updateMovies = async (id, data) => {
    const client = await connectToDb()
    const db = client.db("OMDB")
    db.collection("movies").updateOne(
        { "imdbID": id },
        { $set: data }
    )
}

const deleteMovies = async (id) => {
        const client = await connectToDb()
        const db = client.db("OMDB")
        db.collection("movies").removeOne(
            { "_id": ObjectId(id) }
        )
}

module.exports = {getMovies, storeMovies, updateMovies, deleteMovies}




