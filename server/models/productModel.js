const mongodb = require('mongodb');
require('dotenv').config();

module.exports = {
async loadProductsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('CashRegisterApp').collection('products');
    }
}

