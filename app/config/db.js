const MongoClient = require('mongodb');

const connectToDB = () => {
    const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@lmsdev.fr6mr.mongodb.net?retryWrites=true&w=majority`;
    return async function (req, res, next){
        try{
            let client = await MongoClient.connect(connectionString, { useUnifiedTopology: true });
            const db = await client.db('OMDB');
            req['database'] = db;
            next();
        }catch(err){
            console.error("DB Connection Failed", err);
            next();
        }
    }
}

module.exports = connectToDB;