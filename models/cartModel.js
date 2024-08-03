/*const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    
    product: [
        {
            product_id: {
                type: String
            },
            product_quantity: {
                type: Number
            }
        }
    ]
});

const Product_export = mongoose.model('cart', cartSchema);

module.exports = Product_export;


*/
/*
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    product: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing
                ref: 'Product' // Reference Product model
            },
            product_quantity: {
                type: Number
            }
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
*/
/*
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usermodel' // Replace with your user model
    },
    product: [
        {
            product_id: {
                type: String, // Use String for UUIDs
                required: true,
                ref: 'ProductModel' // Ensure this references the Product model
            },
            product_quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

const CartModel = mongoose.model('Cart', cartSchema);

module.exports = CartModel;

*/

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
       // ref: 'User'
    },
    product: [
        {
            product_id: {
                type: String,
                required: true,
                //ref: 'Product'
            },
            product_quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

const CartModel = mongoose.model('Cart', cartSchema);

module.exports = CartModel;
