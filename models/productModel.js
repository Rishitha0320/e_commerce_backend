/*
add to cart
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: { 
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: [
        {
            rate: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

*/
/*
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: [
        {
            rate: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

*/
/*
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String, // Add this field to store UUIDs
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: [
        {
            rate: {
                type: String
            },
            count: {
                type: Number
            }
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
*/
/*
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID function

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    product_id: {
        type: String, // Use String for UUID
       // default: uuidv4, // Generate UUID by default
        unique: true
    }
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;


*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    product_id: { type: String, unique: true, required: true }, // Unique ID
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    rating: [
        {
            rate: { type: String },
            count: { type: Number }
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);

/*
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID function

const ratingSchema = new mongoose.Schema({
    rate: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
}, { _id: true });

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    product_id: {
        type: String, // Use String for UUID
        default: uuidv4, // Generate UUID by default
        unique: true
    },
    rating: [ratingSchema] // Rating is an array of rating objects
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
*/