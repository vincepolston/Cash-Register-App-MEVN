const mongodb = require('mongodb');

// model to connect to receipts collection
module.exports = {
async loadReceiptsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('CashRegisterApp').collection('receipts');
    }
}

