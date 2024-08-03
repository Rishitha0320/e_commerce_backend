/*const express = require('express');
const router = express.Router();
const { buyNow } = require('../controllers/ordercontroller');
const auth = require('../middlewares/auth'); // Import the authentication middleware

// Route to handle the 'buy now' functionality
router.post('/buy', auth, buyNow);

module.exports = router;
*/
/*
const express = require('express');
const router = express.Router();
const { buyNow } = require('../controllers/ordercontroller');
const { getOrderDetails } = require('../controllers/ordercontroller');
const auth = require('../middlewares/auth'); // Import the authentication middleware

// Route to handle the 'buy now' functionality
router.post('/buy', auth, buyNow);
router.get('/details/:id', auth, getOrderDetails);
module.exports = router;
*/
const express = require('express');
const router = express.Router();
const { buyNow, getOrderDetails, getUserOrders, addOrder, getOrder } = require('../controllers/ordercontroller'); // Ensure all needed functions are imported
const auth = require('../middlewares/auth'); // Import the authentication middleware

// Route to handle the 'buy now' functionality
router.post('/buy', auth,addOrder);

// Route to get all orders for a specific user
router.get('/my_orders', auth, getOrder);



module.exports = router;
