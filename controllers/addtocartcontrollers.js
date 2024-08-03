/*
 add to cart 
const CartModel = require("../models/cartModel");
// const Productmodel = require("../models/productModel");

const jwt = require("jsonwebtoken");

const addCart = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { productId, productQuantity } = req.body;

        // Check if the user already has a cart entry
        let userCart = await CartModel.findOne({ user_id: userId });

        if (userCart) {
            // Check if the product is already in the user's cart
            const productIndex = userCart.product.findIndex(item => item.product_id === productId);

            if (productIndex !== -1) {
                // Product exists in the cart, update the quantity
                userCart.product[productIndex].product_quantity += productQuantity;
                await userCart.save();
                return res.status(200).json({ message: 'Product quantity updated in the cart.' });
            } else {
                // Product does not exist in the cart, add it
                userCart.product.push({ product_id: productId, product_quantity: productQuantity });
                await userCart.save();
                return res.status(200).json({ message: 'Product added to the cart.' });
            }
        } else {
            // User does not have a cart, create one
            userCart = new CartModel({
                user_id: userId,
                product: [{ product_id: productId, product_quantity: productQuantity }]
            });
            await userCart.save();
            return res.status(201).json({ message: 'Cart created and product added.' });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCart };
*/
/*
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const jwt = require("jsonwebtoken");

// Controller to add a product to the cart
const addCart = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { productId, productQuantity } = req.body;

        // Check if the user already has a cart entry
        let userCart = await CartModel.findOne({ user_id: userId });

        if (userCart) {
            // Check if the product is already in the user's cart
            const productIndex = userCart.product.findIndex(item => item.product_id.toString() === productId);

            if (productIndex !== -1) {
                // Product exists in the cart, update the quantity
                userCart.product[productIndex].product_quantity += productQuantity;
                await userCart.save();
                return res.status(200).json({ message: 'Product quantity updated in the cart.' });
            } else {
                // Product does not exist in the cart, add it
                userCart.product.push({ product_id: productId, product_quantity: productQuantity });
                await userCart.save();
                return res.status(200).json({ message: 'Product added to the cart.' });
            }
        } else {
            // User does not have a cart, create one
            userCart = new CartModel({
                user_id: userId,
                product: [{ product_id: productId, product_quantity: productQuantity }]
            });
            await userCart.save();
            return res.status(201).json({ message: 'Cart created and product added.' });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get product details from the cart
const getCartProducts = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware

        // Fetch the cart for the user and populate product details
        const userCart = await CartModel.findOne({ user_id: userId }).populate('product.product_id');

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Map over the cart products to get details
        const productsDetails = userCart.product.map(item => ({
            name: item.product_id.title, // Product title
            description: item.product_id.description, // Product description
            title: item.product_id.title, // Product title
            image: item.product_id.image, // Product image
            quantity: item.product_quantity // Product quantity in the cart
        }));

        res.json(productsDetails);
    } catch (error) {
        console.error('Error fetching cart products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCart, getCartProducts };
*/
/*
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const jwt = require("jsonwebtoken");

// Controller to add a product to the cart
const addCart = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { productId, productQuantity } = req.body;

        // Check if the user already has a cart entry
        let userCart = await CartModel.findOne({ user_id: userId });

        if (userCart) {
            // Check if the product is already in the user's cart
            const productIndex = userCart.product.findIndex(item => item.product_id.toString() === productId);

            if (productIndex !== -1) {
                // Product exists in the cart, update the quantity
                userCart.product[productIndex].product_quantity += productQuantity;
                await userCart.save();
                return res.status(200).json({ message: 'Product quantity updated in the cart.' });
            } else {
                // Product does not exist in the cart, add it
                userCart.product.push({ product_id: productId, product_quantity: productQuantity });
                await userCart.save();
                return res.status(200).json({ message: 'Product added to the cart.' });
            }
        } else {
            // User does not have a cart, create one
            userCart = new CartModel({
                user_id: userId,
                product: [{ product_id: productId, product_quantity: productQuantity }]
            });
            await userCart.save();
            return res.status(201).json({ message: 'Cart created and product added.' });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get product details from the cart
const getCartProducts = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware

        // Fetch the cart for the user and populate product details
        const userCart = await CartModel.findOne({ user_id: userId }).populate('product.product_id');

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Map over the cart products to get details
        const productsDetails = userCart.product.map(item => ({
            name: item.product_id.title, // Product title
            description: item.product_id.description, // Product description
            title: item.product_id.title, // Product title
            image: item.product_id.image, // Product image
            quantity: item.product_quantity // Product quantity in the cart
        }));

        res.json(productsDetails);
    } catch (error) {
        console.error('Error fetching cart products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCart, getCartProducts };
*/
/*
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");

// Controller to add a product to the cart
const addCart = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { productId, productQuantity } = req.body;

        // Check if the user already has a cart entry
        let userCart = await CartModel.findOne({ user_id: userId });

        if (userCart) {
            // Check if the product is already in the user's cart
            const productIndex = userCart.product.findIndex(item => item.product_id === productId);

            if (productIndex !== -1) {
                // Product exists in the cart, update the quantity
                userCart.product[productIndex].product_quantity += productQuantity;
                await userCart.save();
                return res.status(200).json({ message: 'Product quantity updated in the cart.' });
            } else {
                // Product does not exist in the cart, add it
                userCart.product.push({ product_id: productId, product_quantity: productQuantity });
                await userCart.save();
                return res.status(200).json({ message: 'Product added to the cart.' });
            }
        } else {
            // User does not have a cart, create one
            userCart = new CartModel({
                user_id: userId,
                product: [{ product_id: productId, product_quantity: productQuantity }]
            });
            await userCart.save();
            return res.status(201).json({ message: 'Cart created and product added.' });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller to get product details from the cart
const getCartProducts = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware

        // Fetch the cart for the user
        const userCart = await CartModel.findOne({ user_id: userId });

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Get product details for each product in the cart
        const productIds = userCart.product.map(item => item.product_id);
        const products = await ProductModel.find({ id: { $in: productIds } });

        // Map over the cart products to get details
        const productsDetails = userCart.product.map(item => {
            const product = products.find(p => p.id === item.product_id);
            return {
                name: product.title,
                description: product.description,
                title: product.title,
                image: product.image,
                quantity: item.product_quantity
            };
        });

        res.json(productsDetails);
    } catch (error) {
        console.error('Error fetching cart products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCart, getCartProducts };
*/
/*
const CartModel = require("../models/cartModel");
const ProductModel = require("../models/productModel");
const usermodel=require('../models/usermodel');

const addCart = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware
        const { productId, productQuantity } = req.body;

        // Check if the user already has a cart entry
        let userCart = await CartModel.findOne({ user_id: userId });
        
        if (userCart) {
            // Check if the product is already in the user's cart
            const productIndex = userCart.product.findIndex(item => item.product_id.toString() === productId);

            if (productIndex !== -1) {
                // Product exists in the cart, update the quantity
                userCart.product[productIndex].product_quantity += productQuantity;
                await userCart.save();
                return res.status(200).json({ message: 'Product quantity updated in the cart.' });
            } 
            else {
                // Product does not exist in the cart, add it
                userCart.product.push({ product_id: productId, product_quantity: productQuantity });
                await userCart.save();
                return res.status(200).json({ message: 'Product added to the cart.' });
            }
        } else {
            // User does not have a cart, create one
            userCart = new CartModel({
                user_id: userId,
                product: [{ product_id: productId, product_quantity: productQuantity }]
            });
            await userCart.save();
            return res.status(201).json({ message: 'Cart created and product added.' });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getCartProducts = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is added to req in auth middleware

        // Fetch the cart for the user
        const userCart = await CartModel.findOne({ user_id: userId });

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Get product IDs from the cart
        const productIds = userCart.product.map(item => item.product_id);

        // Fetch products from the ProductModel
        const products = await ProductModel.find({ id: { $in: productIds } });

        // Create a map for quick lookup
        const productMap = products.reduce((acc, product) => {
            acc[product.id] = product;
            return acc;
        }, {});

        // Map over the cart products to get details
        const productsDetails = userCart.product.map(item => {
            const product = productMap[item.product_id];

            if (!product) {
                console.warn(`Product not found for id: ${item.product_id}`);
                return {
                    name: 'Unknown',
                    description: 'No description available',
                    title: 'Unknown',
                    image: 'No image available',
                    quantity: item.product_quantity,
                    price:'no price available',
                };
            }

            return {
                name: product.title,
                description: product.description,
                title: product.title,
                image: product.image,
                quantity: item.product_quantity,
                price:product.price
            };
        });

        res.json(productsDetails);
    } catch (error) {
        console.error('Error fetching cart products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCart = async (req, res) => {
    try {
        
        const userId = req.userId; // getting id from auth
        const { productId } = req.body;//getting from user body section 
        const check_id = await CartModel.findOne({user_id:userId})//check userid if present//schme:userid from const userId
        // user_id: userId 
        if (check_id) { //when id is correct
            const allproducts = check_id.product;

        
            if (allproducts.length <=1) { // check if the cart has how many products
             
                //delete cart
                await CartModel.deleteOne({user_id:userId});// delete the entire cart//use await when there is query
                return res.status(200).json({message:'Cart deleted because it had 1 or no products left'});}

            
            // filter out the product that needs to be deleted
            const new_product = allproducts.filter(pro=>pro.product_id.toString()!==productId);
            //product_id!==productId, product_id!->schema,productId ->inga irukura allproducts
              check_id.product =new_product; // update the cart with the remaining products
              //check_id la ellame retrive aagum from db ->check_id aprom product la poi,
              //check_id.product nu access pannanum
                
          
        await check_id.save();
            return res.status(201).json({ message: 'product removed from cart' });
        }
        
        else{
            return res.status(404).json({ message: 'Cart not found.' });
        } 
    }
    catch (error) {
        console.error('Error adding to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addCart, getCartProducts,deleteCart};

*/
/*
const Cart = require('../models/cartModel');

// Function to add a product to the cart
exports.addCart = async (req, res) => {
    try {
        const { user_id, product_id, product_quantity } = req.body;

        if (!user_id || !product_id || !product_quantity) {
            return res.status(400).send({ message: "user_id, product_id, and product_quantity are required" });
        }

        let cart = await Cart.findOne({ user_id });

        if (cart) {
            const productIndex = cart.product.findIndex(p => p.product_id == product_id);

            if (productIndex > -1) {
                let productItem = cart.product[productIndex];
                productItem.product_quantity += product_quantity;
                cart.product[productIndex] = productItem;
            } else {
                cart.product.push({ product_id, product_quantity });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            const newCart = await Cart.create({
                user_id,
                product: [{ product_id, product_quantity }]
            });
            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.error('Error adding product to cart:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};

// Function to get cart products
exports.getCartProducts = async (req, res) => {
    try {
        const user_id = req.userId;
        const cart = await Cart.findOne({ user_id });
        if (!cart) {
            return res.status(404).send({ message: "Cart not found" });
        }
        res.status(200).send(cart);
    } catch (err) {
        console.error('Error fetching cart products:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};

// Function to delete a product from the cart
exports.deleteCart = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;
        if (!user_id || !product_id) {
            return res.status(400).send({ message: "user_id and product_id are required" });
        }

        let cart = await Cart.findOne({ user_id });
        if (!cart) {
            return res.status(404).send({ message: "Cart not found" });
        }

        cart.product = cart.product.filter(p => p.product_id != product_id);
        cart = await cart.save();
        res.status(200).send(cart);
    } catch (err) {
        console.error('Error deleting product from cart:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};

*/
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

// Function to add a product to the cart
exports.addCart = async (req, res) => {
    try {
        // Extract user_id from the request object (set by auth middleware)
        const user_id = req.userId; // This comes from the auth middleware

        // Extract product details from the request body
        const { product_id, product_quantity } = req.body;

        // Validate the presence of required fields
        if (!user_id || !product_id || !product_quantity) {
            return res.status(400).send({ message: "product_id and product_quantity are required" });
        }

        // Ensure product_quantity is a positive integer
        if (product_quantity <= 0) {
            return res.status(400).send({ message: "product_quantity must be greater than 0" });
        }

        // Find the cart for the user
        let cart = await Cart.findOne({ user_id });

        if (cart) {
            // If cart exists for the user
            const productIndex = cart.product.findIndex(p => p.product_id == product_id);

            if (productIndex > -1) {
                // If product exists in the cart, update the quantity
                let productItem = cart.product[productIndex];
                productItem.product_quantity += product_quantity;
                cart.product[productIndex] = productItem;
            } else {
                // If product does not exist in the cart, add it
                cart.product.push({ product_id, product_quantity });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // If cart does not exist, create a new cart
            const newCart = await Cart.create({
                user_id,
                product: [{ product_id, product_quantity }]
            });
            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.error('Error adding product to cart:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};

// Function to get cart products
exports.getCartProducts = async (req, res) => {
    try {
        // Extract user_id from the request object (set by auth middleware)
        const user_id = req.userId;

        // Find the cart for the user
        const cart = await Cart.findOne({ user_id });

        if (cart) {
            return res.status(200).send(cart);
        } else {
            return res.status(404).send({ message: "Cart not found" });
        }
    } catch (err) {
        console.error('Error retrieving cart products:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};

// Function to delete a product from the cart
exports.deleteCart = async (req, res) => {
    try {
        // Extract user_id from the request object (set by auth middleware)
        const user_id = req.userId;

        // Extract product_id from the request body
        const { product_id } = req.body;

        // Validate the presence of product_id
        if (!product_id) {
            return res.status(400).send({ message: "product_id is required" });
        }

        // Find the cart for the user
        let cart = await Cart.findOne({ user_id });

        if (cart) {
            // Filter out the product to be deleted
            cart.product = cart.product.filter(p => p.product_id != product_id);
            cart = await cart.save();
            return res.status(200).send(cart);
        } else {
            return res.status(404).send({ message: "Cart not found" });
        }
    } catch (err) {
        console.error('Error deleting product from cart:', err);
        res.status(500).send({ message: "Something went wrong", error: err });
    }
};
