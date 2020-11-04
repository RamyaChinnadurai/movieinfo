const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionString = "mongodb+srv://rams:rams123@cluster0.kvwch.mongodb.net/omdb?retryWrites=true&w=majority";

const connectToDb = async() => MongoClient.connect(connectionString, {useUnifiedTopology: true});

const getMovies = async() => {
    try{
        const client = await connectToDb();
        const db = client.db("omdb");
        const response = await db.collection('movies').find({});
        console.log("Success");
        return response.toArray();
    }catch(error){
        console.log('error: ', error);
    }
}

module.exports = {
    getMovies
}


