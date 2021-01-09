const receiptModel = require('../models/receiptModel');
const mongodb = require('mongodb');
const { loadReceiptsCollection } = require('../models/receiptModel');
const { response } = require('express');

module.exports = {
    getReceipts: async (req, res) => {
        const receipts = await receiptModel.loadReceiptsCollection();
        res.send(await receipts.find({}).toArray());
    },

    getReceipt: async (req, res) => {
        const receipt = await receiptModel.loadReceiptsCollection();
        res.send(await receipt.findOne({_id: new mongodb.ObjectID(req.params.id)}));
    },

    addReceipt: async (req, res) => {
        const receipts = await receiptModel.loadReceiptsCollection();
        await receipts.insertOne({
            name: req.body.customerName,
            cart: req.body.cart,
            total: req.body.total,
            createdAt: new Date()
        });
        res.status(201).send();
    },

    // get all carts
    getCarts: async (req, res) => {
        const cart = await receiptModel.loadReceiptsCollection();
        res.send(await cart.find({  }, { cart: 1 }).project({cart: 1, _id: 0}).toArray());
    },


}



