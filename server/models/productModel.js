const mongodb = require('mongodb');


/// model to connect to products collection
module.exports = {
async loadProductsCollection() {
    const client = await mongodb.MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('CashRegisterAppMEVN').collection('products');
    }
}

