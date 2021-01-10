const mongodb = require('mongodb');

// model to connect to movies collection
module.exports = {
async loadMoviesCollection() {
        const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        return client.db('CashRegisterAppMEVN').collection('movies');
    }
}