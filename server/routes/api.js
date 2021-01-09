const express = require('express');

// import controllers
const movieController = require('../controllers/movieController');
const productController = require('../controllers/productController');
const receiptController = require('../controllers/receiptController');

const router = express.Router();

// movies
router.get('/movies', movieController.getMovies);
router.get('/movie/:id', movieController.getMovie);
router.post('/movies', movieController.addMovie);
router.delete('/movies/:id', movieController.deleteMovie);

// products
router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProduct);
router.post('/products', productController.addProduct);
router.delete('/products/:id', productController.deleteProduct);

// receipts
router.get('/receipts', receiptController.getReceipts);
router.get('/receipt/:id', receiptController.getReceipt);
router.post('/receipts', receiptController.addReceipt);
router.get('/receipts/carts/', receiptController.getCarts);


module.exports = router;
