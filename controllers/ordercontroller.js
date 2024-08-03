/*const OrderModel=require("../models/ordermodel");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");

const buyNow = async (req, res) => {
    const userId = req.userId; // Assuming userId is added to req in auth middleware
    const { cust_name, cust_phno, cust_address } = req.body;

    try {
        // Fetch the user's cart
        const userCart = await CartModel.findOne({ user_id: userId });
        if (!userCart || !userCart.product.length) {
            return res.status(404).json({ message: "No items in cart" });
        }

        const products = userCart.product;
        let cartProductArray = [];
        let totalAmount = 0;

        for (let i = 0; i < products.length; i++) {
            const productId = products[i].product_id;
            const quantity = products[i].product_quantity;

            // Fetch product details
            const product = await ProductModel.findOne({ id: productId });
            if (product) {
                const cartProduct = {
                title : product.title, // Assuming the field is 'title'
                description : product.description, // Assuming the field is 'description'
                image : product.image,// Assuming the field is 'image'
                price : product.price, // Assuming the field is 'price'
                quantity : quantity,
                totalPrize : Number(product.price) * Number(quantity)
                }
                cartProductArray.push(cartProduct);
                totalAmount += cartProduct.totalPrize;
            } else {
                console.warn(`Product not found: ${productId}`);
            }
        }

        // Create new order
        const newOrder = new OrderModel({
            cust_name,
            cust_phno,
            cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
            products: userCart.product.map(item => ({
                product_id: item.product_id,
                product_quantity: item.product_quantity
            })),
            total_amount: totalAmount,
            user_id: userId,
            user_email: req.userEmail // Assuming userEmail is added to req in auth middleware
        });

        // Save the new order
        await newOrder.save();

        // Clear the user's cart
        await CartModel.deleteOne({ user_id: userId });

        res.status(201).json({ message: 'Order placed successfully.', order: newOrder, cartProducts: cartProductArray });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { buyNow };
*/
/*
const OrderModel=require("../models/ordermodel");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");

const buyNow = async (req, res) => {
    const userId = req.userId; // Assuming userId is added to req in auth middleware
    const { cust_name, cust_phno, cust_address } = req.body;

    try {
        // Fetch the user's cart
        const userCart = await CartModel.findOne({ user_id: userId });
        if (!userCart || !userCart.product.length) {
            return res.status(404).json({ message: "No items in cart" });
        }

        const products = userCart.product;
        let cartProductArray = [];
        let totalAmount = 0;

        for (let i = 0; i < products.length; i++) {
            const productId = products[i].product_id;
            const quantity = products[i].product_quantity;

            // Fetch product details
            const product = await ProductModel.findOne({ id: productId });
            if (product) {
                const cartProduct = {};
                cartProduct.title = product.title; // Assuming the field is 'title'
                cartProduct.description = product.description; // Assuming the field is 'description'
                cartProduct.image = product.image; // Assuming the field is 'image'
                cartProduct.price = product.price; // Assuming the field is 'price'
                cartProduct.quantity = quantity;
                cartProduct.totalPrize = Number(product.price) * Number(quantity);
                
                cartProductArray.push(cartProduct);
                totalAmount += cartProduct.totalPrize;
            } else {
                console.warn(`Product not found: ${productId}`);
            }
        }

        // Create new order
        const newOrder = new OrderModel({
            cust_name,
            cust_phno,
            cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
            products: userCart.product.map(item => ({
                product_id: item.product_id,
                product_quantity: item.product_quantity
            })),
            total_amount: totalAmount,
            user_id: userId,
            user_email: req.userEmail // Assuming userEmail is added to req in auth middleware
        });

        // Save the new order
        await newOrder.save();

        // Clear the user's cart
        await CartModel.deleteOne({ user_id: userId });

        res.status(201).json({ message: 'Order placed successfully.', order: newOrder, cartProducts: cartProductArray });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { buyNow }; */
/*
const OrderModel = require("../models/orderModel");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");

const buyNow = async (req, res) => {
    const userId = req.userId; // Assuming userId is added to req in auth middleware
    const { cust_name, cust_phno, cust_address } = req.body;

    try {
        // Fetch the user's cart
        const userCart = await CartModel.findOne({ userId });
        if (!userCart || !userCart.product.length) {
            return res.status(404).json({ message: "No items in cart" });
        }

        // const products = userCart.product;
        // let cartProductArray = [];
        // let totalAmount = 0;

        // for (let i = 0; i < products.length; i++) {
        //     const productId = products[i].product_id;
        //     const quantity = products[i].product_quantity;

        //     // Fetch product details
        //     const product = await ProductModel.findOne({ id: productId });
        //     if (product) {
        //         const cartProduct = {};
        //         cartProduct.title = product.title; // Assuming the field is 'title'
        //         cartProduct.description = product.description; // Assuming the field is 'description'
        //         cartProduct.image = product.image; // Assuming the field is 'image'
        //         cartProduct.price = product.price; // Assuming the field is 'price'
        //         cartProduct.quantity = quantity;
        //         cartProduct.totalPrize = Number(product.price) * Number(quantity);
                
        //         cartProductArray.push(cartProduct);
        //         totalAmount += cartProduct.totalPrize;
        //     } else {
        //         console.warn(`Product not found: ${productId}`);
        //     }
        // }

        // Create new order
        const newOrder = new OrderModel({
            cust_name,
            cust_phno,
            cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
            product:userCart.product,
            // total_amount: totalAmount,
            user_id: userId,
            // user_email: req.userEmail // Assuming userEmail is added to req in auth middleware
        });

        // Save the new order
        await newOrder.save();

        // Clear the user's cart
        await CartModel.deleteOne({ user_id: userId });

        res.status(201).json({ message: 'Order placed successfully.', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { buyNow };
*//*
const buyNow = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware

        // Fetch the cart for the user
        const userCart = await CartModel.findOne({ user_id: userId });

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Get product IDs from the cart
        const productIds = userCart.product.map(item => item.product_id);

        // Fetch products from the ProductModel using the `id` field
        const products = await ProductModel.find({ id: { $in: productIds } });

        if (!products.length) {
            return res.status(404).json({ message: 'No products found in the cart' });
        }

        const cartProducts = userCart.product.map(item => {
            const product = products.find(p => p.id === item.product_id);
            return {
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                quantity: item.product_quantity,
                totalPrize: product.price * item.product_quantity
            };
        });

        const totalAmount = cartProducts.reduce((total, item) => total + item.totalPrize, 0);

        const orderDetails = {
            cust_name: req.body.cust_name,
            cust_phno: req.body.cust_phno,
            cust_address: req.body.cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            total_amount: totalAmount,
            user_id: userId,
            products: userCart.product.map(item => ({
                product_id: item.product_id,
                product_quantity: item.product_quantity
            }))
        };

        // Save the order (assuming you have an OrderModel)
        const newOrder = new OrderModel(orderDetails);
        await newOrder.save();

        // Clear the cart
        await CartModel.deleteOne({ user_id: userId });

        // Return the order details and cart products
        return res.status(200).json({
            message: 'Order placed successfully.',
            order: newOrder,
            cartProducts: cartProducts
        });
    } catch (error) {
        console.error('Error placing order:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { buyNow };
*/ 
/*
const OrderModel = require("../models/ordermodel");
const CartModel = require("../models/cartModel");
const UserModel = require("../models/usermodel");
const ProductModel = require("../models/productModel");

// Buy Now function
const buyNow = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { custName, custPhno, custAddress } = req.body;

        // Retrieve the user's cart
        const userCart = await CartModel.findOne({ user_id: userId }).populate('product.product_id');

        if (!userCart || userCart.product.length === 0) {
            return res.status(400).json({ message: 'Your cart is empty.' });
        }

        // Calculate total amount
        let totalAmount = 0;
        userCart.product.forEach(item => {
            totalAmount += item.product_quantity * item.product_id.price;
        });

        // Create a new order
        const newOrder = new OrderModel({
            cust_name: custName,
            cust_phno: custPhno,
            cust_address: custAddress,
            total_amount: totalAmount,
            user_id: userId,
            product: userCart.product.map(item => ({
                product_id: item.product_id._id,
                product_quantity: item.product_quantity
            }))
        });

        // Save the new order to the database
        const savedOrder = await newOrder.save();

        // Clear the user's cart
        await CartModel.findOneAndDelete({ user_id: userId });

        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { buyNow };*/
/*
const OrderModel = require('../models/ordermodel'); // Adjust the path as necessary
const ProductModel = require('../models/productModel'); // Adjust the path as necessary
const { v4: uuidv4 } = require('uuid');

// Create a new order
const createOrder = async (req, res) => {
    const { cust_name, cust_phone, cust_address, products, totalAmount, userId } = req.body;

    try {
        const order = new OrderModel({
            orderId: uuidv4(), // Generate a new UUID for the order
            cust_name,
            cust_phone,
            cust_address,
            orderDate: Date.now(),
            products: products.map(item => ({
                productid: item.productid,
                pro_qty: item.pro_qty
            })),
            totalAmount,
            orderStatus: 'Inprogress',
            userId,
            deliveryDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // Estimated delivery date: 10 days from now
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all orders for a specific user
const getUserOrders = async (req, res) => {
    const userId = req.params.userId;

    try {
        const orders = await OrderModel.find({ userId });

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get detailed information for a specific order
const getOrderDetails = async (req, res) => {
    const orderId = req.params.id;

    try {
        // Find the order by order ID
        const order = await OrderModel.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Get detailed product information
        const productPromises = order.products.map(async (item) => {
            const product = await ProductModel.findOne({ productId: item.productid }); // Adjust the field name if necessary
            return {
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                quantity: item.pro_qty
            };
        });

        const products = await Promise.all(productPromises);

        // Respond with detailed order information
        res.json({
            products,
            subtotal: order.totalAmount,
            orderDate: order.orderDate,
            estimatedOrderDate: order.deliveryDate,
            id: order.orderId,
            orderStatus: order.orderStatus
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createOrder, getUserOrders, getOrderDetails };
*/


/*


// Buy Now function

const OrderModel = require("../models/orderModel");
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");

// Place an order
exports.buyNow = async (req, res) => {
    try {
        const { cust_name, phone_number, address } = req.body;
        const userId = req.userId; // Ensure you are correctly extracting the userId from JWT

        if (!cust_name || !phone_number || !address) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Fetch the cart products for the user
        console.log("Fetching cart for user:", userId);
        const cart = await CartModel.findOne({ userId });

        // Check if the cart exists and has products
        if (!cart || !cart.products || cart.products.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // Calculate the total amount
        let total_amount = 0;
        const productDetails = [];
        for (const item of cart.products) {
            const product = await ProductModel.findById(item.productId);
            if (product) {
                total_amount += product.price * item.quantity;
                productDetails.push({
                    title: product.title,
                    description: product.description,
                    image: product.image,
                    price: product.price,
                    quantity: item.quantity,
                });
            }
        }
   
        // Create a new order
        const newOrder = new OrderModel({
            cust_name,
            phone_number,
            address,
            userId,
            order_date: new Date(),
            estimated_date: new Date(new Date().setDate(new Date().getDate() + 10)),
            total_amount,
            products: productDetails,
        });

        // Save the order
        await newOrder.save();

        // Clear the cart after placing the order
        await CartModel.findOneAndUpdate({ userId }, { $set: { products: [] } });

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Error placing order", error });
    }
};

// Get all orders for a specific user
exports.getUserOrders = async (req, res) => {
    const userId = req.params.userId;

    try {
        const orders = await OrderModel.find({ userId });

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get detailed information for a specific order
exports.getOrderDetails = async (req, res) => {
    const orderId = req.params.id;

    try {
        const order = await OrderModel.findOne({ _id: orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Get detailed product information
        const productPromises = order.products.map(async (item) => {
            const product = await ProductModel.findById(item.productId);
            return {
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                quantity: item.quantity
            };
        });

        const products = await Promise.all(productPromises);

        res.json({
            products,
            subtotal: order.total_amount,
            order_date: order.order_date,
            estimated_order_date: order.estimated_date,
            id: order._id,
            order_status: order.order_status
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
*/
/*purnima code
const orderModel = require('../models/ordermodel')
const productModel = require('../models/productModel')
const cardModel = require("../models/cartModel");
const { v4 : uuidv4 } = require('uuid');

const addOrder = async (req, res) => {
    const userId = req.userId;
    try {
        // const email = res.user.tokenemail;
        const { cust_name, cust_phno, cust_address } = req.body;
        const userCart = await cardModel.findOne({ userId });
        let total = 0;
         let cardProductArray = [];
        const cardproducts = userCart.product;

        for (let i = 0; i < cardproducts.length; i++) {
            const productId = cardproducts[i].product_id;
            const quantity = cardproducts[i].product_quantity;

            const product = await productModel.findOne({ id: productId});
            console.log(product);
        //    res.json(product)
          if (product) {
          const cartproduct={}
          cartproduct.title =product.title;
          cartproduct.description = product.description ;
          cartproduct.image= product.image
          cartproduct.price=product.price
          cartproduct.quantity=quantity
          cartproduct.totalPrize= Number(product.price)*Number(quantity)
          cardProductArray.push(cartproduct);
          total+= cartproduct.totalPrize;
        } else {
          console.warn(`Product not found: ${productId}`);
        }

        }

        const orderProducts = cardProductArray;

        const orderData = new orderModel({
            id:uuidv4(),
            userId,
            cust_name,
            cust_phno,
            cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            product: orderProducts,
           total
            // email 
        });

        await orderData.save();
        await cardModel.findOneAndDelete({userId})
        
        res.status(201).json({ message: "Order created successfully", orderData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const order = await orderModel.findOne({ userId });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        const { order_id, product, order_date, estimate_date, order_status, total } = order;
        res.status(200).json({ order_id,product, order_date,estimate_date, order_status, total });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addOrder,getOrder };*/
const orderModel = require('../models/ordermodel');
const productModel = require('../models/productModel');
const cardModel = require("../models/cartModel");
const { v4: uuidv4 } = require('uuid');

const addOrder = async (req, res) => {
    const userId = req.userId;
    try {
        // Log the request body to debug
        console.log("Request body:", req.body);

        const { cust_name, cust_phno, cust_address } = req.body;

        // Check if required fields are present in the request body
        if (!cust_name || !cust_phno || !cust_address) {
            return res.status(400).json({ message: "Customer name, phone number, and address are required" });
        }

        // Fetch the user's cart
        console.log("Fetching cart for user:", userId);
        const userCart = await cardModel.findOne({ user_id: userId });

        if (!userCart) {
            return res.status(400).json({ message: "Cart is empty or not found" });
        }

        let total = 0;
        let cardProductArray = [];
        const cardproducts = userCart.product;

        if (!cardproducts || cardproducts.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        for (let i = 0; i < cardproducts.length; i++) {
            const productId = cardproducts[i].product_id;
            const quantity = cardproducts[i].product_quantity;

            // Fetch the product details correctly
            const product = await productModel.findOne({ product_id: productId });
            console.log("Product found:", product);

            if (product) {
                const cartproduct = {
                    title: product.title,
                    description: product.description,
                    image: product.image,
                    price: product.price,
                    quantity: quantity,
                    totalPrize: Number(product.price) * Number(quantity)
                };
                cardProductArray.push(cartproduct);
                total += cartproduct.totalPrize;
            } else {
                console.warn(`Product not found: ${productId}`);
            }
        }

        const orderProducts = cardProductArray;

        // Ensure all required fields are provided
        const orderData = new orderModel({
            user_id: userId,
            cust_name,
            cust_phno,
            cust_address,
            order_date: new Date(),
            estimate_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            product: orderProducts,
            total_amount: total
        });

        await orderData.save();
        await cardModel.findOneAndDelete({ user_id: userId });

        res.status(201).json({ message: "Order created successfully", orderData });
    } catch (err) {
        console.error("Error creating order:", err);
        res.status(500).json({ error: err.message });
    }
};

const getOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const order = await orderModel.findOne({ user_id: userId });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        const { order_id, product, order_date, estimate_date, order_status, total_amount } = order;
        res.status(200).json({ order_id, product, order_date, estimate_date, order_status, total_amount });
    } catch (err) {
        console.error("Error fetching order:", err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addOrder, getOrder };
