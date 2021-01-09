const mongodb = require('mongodb');


module.exports = {
async loadReceiptsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('CashRegisterApp').collection('receipts');
    }
}

