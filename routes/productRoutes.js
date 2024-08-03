/*const express = require('express');
const Router = express.Router();
const ProductController = require('../controllers/productController');
const auth = require("../middlewares/auth");

// Route to get all products
Router.get('/products', auth,ProductController.getallproducts);


// Route to create a new product
Router.post('/products', ProductController.createproducts);

// Route to update a product by ID
Router.put('/products/:id', ProductController.updateProduct);

// Route to delete a product by ID
Router.delete('/products/:id', ProductController.deleteproduct);

module.exports = Router;

*/
/*
const express = require('express');
const Router = express.Router();
const ProductController = require('../controllers/productController');
const auth = require("../middlewares/auth");

// Route to get all products
Router.get('/products', auth, ProductController.getAllProducts);

// Route to create a new product
Router.post('/products', ProductController.createProduct);

// Route to update a product by ID
Router.put('/products/:id', ProductController.updateProduct);

// Route to delete a product by ID
Router.delete('/products/:id', ProductController.deleteProduct);

module.exports = Router;
*/
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController'); // Adjust the path as necessary

// Define your routes and make sure to import correct handlers
router.post('/post', ProductController.createProduct); // Route to create a new product
router.get('/:id', ProductController.getProductById); // Route to get product by ID
// Route to get all products
router.get('/getall', ProductController.getAllProducts);

router.put('/:id', ProductController.updateProduct); // Route to update product by ID
router.delete('/:id', ProductController.deleteProduct); // Route to delete product by ID

module.exports = router;
