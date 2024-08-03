/*
const express = require('express');
const Router = express.Router();
const usercontroller= require('../controllers/usercontroller');
const addtocartcontroller =require('../controllers/addtocartcontrollers');
const auth =require('../middlewares/auth');

// Route to get all products
// Router.get('/users', usercontroller.login);

// Route to create a new product
Router.post('/regis',usercontroller.register);
Router.post('/login', usercontroller.login);
Router.post('/add',addtocartcontroller.addCart);


/*
// Route to update a product by ID
Router.put('/users/:id', ProductController.updateProduct);

// Route to delete a product by ID
Router.delete('/users/:id', ProductController.deleteproduct);

module.exports = Router;
*/
const express = require('express');
const Router = express.Router();
const userController = require('../controllers/usercontroller');
const addtocartController = require('../controllers/addtocartcontrollers');
const auth = require('../middlewares/auth');

// Route to register a new user
Router.post('/regis', userController.register);

// Route to login a user
Router.post('/login', userController.login);

// Route to add a product to the cart (could be part of user routes for convenience)
Router.post('/add', addtocartController.addCart);

module.exports = Router;
