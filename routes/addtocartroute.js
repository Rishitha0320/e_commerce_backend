/*
const express = require('express');
const Router = express.Router();
const addtocartcontroller = require('../controllers/addtocartcontrollers');

const auth = require('../middlewares/auth');

// Route to add a product to the cart
Router.post('/add-to-cart', auth, addtocartcontroller.addCart);

Router.get('/show', auth, addtocartcontroller.getCartProducts);
Router.delete('/delete',auth, addtocartcontroller. deleteCart);

module.exports = Router;
*/
const express = require('express');
const Router = express.Router();
const addtocartController = require('../controllers/addtocartcontrollers');
const auth = require('../middlewares/auth');

// Route to add a product to the cart
Router.post('/add-to-cart', auth, addtocartController.addCart);

// Route to get cart products
Router.get('/show', auth,addtocartController.getCartProducts);

// Route to delete a product from the cart
Router.delete('/delete', auth, addtocartController.deleteCart);

module.exports = Router;

