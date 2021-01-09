const productModel = require('../models/productModel');
const mongodb = require('mongodb');

module.exports = {
    getProducts: async (req, res) => {
        const products = await productModel.loadProductsCollection();
        res.send(await products.find({}).toArray());
    },

    getProduct: async (req, res) => {
        const product = await productModel.loadProductsCollection();
        res.send(await product.findOne({_id: new mongodb.ObjectID(req.params.id)}));
    },

    addProduct: async (req, res) => {
        const products = await productModel.loadProductsCollection();
        await products.insertOne({
            name: req.body.name,
            price: req.body.price
        });
        res.status(201).send();
    },

    deleteProduct: async (req, res) => {
        const products = await productModel.loadProductsCollection();
        await products.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    }
}

