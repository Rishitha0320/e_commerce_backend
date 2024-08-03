/*
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    cust_name: {
        type: String,
        required: true
    },
    cust_phno: {
        type: String,
        required: true
    },
    cust_address: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        default: function(){
             let york = new Date();
             this.setDate(york.getDate()+10);
             return york;
        },
        required: true
    },
    estimate_date: {
        type: Date,
        default: new Date(Date.now()+10*24*60*60*1000),
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    
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
              // ref: 'ProductModel' Ensure this references the Product model
            },
            product_quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;


*/
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID function

const orderSchema = new mongoose.Schema({
    cust_name: {
        type: String,
        required: true
    },
    cust_phno: {
        type: String,
        required: true
    },
    cust_address: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now,
        required: true
    },
    estimate_date: {
        type: Date,
        default: function() {
            return new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
        },
        required: true
    },
    total_amount: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true,
       // ref: 'User'
    },
    order_id: {
        type: String, // Use String for UUID
        default: uuidv4, // Generate UUID by default
        unique: true
    },
    order_status:{
        type: String,
       
        default: 'Pending'
    },
    product: [
        {
            // product_id: {
            //     type: String, // Use String for UUID
            //     required: true
            // },
            // product_quantity: {
            //     type: Number,
            //     required: true
            // }
        }
    ]
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
