const MongoClient = require("mongodb").MongoClient

const url = "mongodb+srv://gokul:gokul2781@chatcatdb.odn9j.mongodb.net/OMDB?retryWrites=true&w=majority"

const connectToDb = async () => MongoClient.connect(url, {useUnifiedTopology: true})
console.log("ConnectToDb", connectToDb)

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

module.exports = {getMovies}
