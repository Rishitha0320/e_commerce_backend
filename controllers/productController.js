/*const product = require("../models/productModel");
const { v4 : uuidv4 } = require('uuid');


//getall products
const getallproducts = async(req,res)=>{
    try{
        const products = await product.find();
        res.send(products);
    }catch(err){
        //res.status(500).json({message: err.message});
        console.error(err);
    }
};

const createproducts = async(req,res)=>{
    const {id,title,description,category,price,image,rating}= (req.body);
    const newproduct = new product({
        id:uuidv4(),title,description,category,price,image,rating
    });

    try{
        const savedproduct = await newproduct.save();
     res.json(savedproduct);
    } catch(err){
        console.error(err);express.use(express.json());
    }
};

//update a product

const updateProduct = async(req,res)=>{
    const id=req.params.id;
    const updatedProduct = req.body;

    try{
        const pro= await product.findOneAndUpdate({id: id},updatedProduct,{new:true});
        if(!pro){
            return res.status(404).json({message: "Product not found"});
        }
        res.json(pro);
    }catch(err){
        console.error(err);
        res.status(500).json({message: err.message});
    }
};
//delete a product
const deleteproduct = async(req,res)=>{
    const id = req.params.id;
    try{
        const del = await product.findOneAndDelete({id:id});
        if(!del){
            res.json({message:"product not found"});
        }
        res.json(del);
    }catch(err){
        console.error(err);
        res.json({message:err.message});
    }
};

module.exports ={getallproducts,createproducts,updateProduct,deleteproduct};
*/
const { v4: uuidv4 } = require('uuid'); // Import uuid
const ProductModel = require('../models/productModel'); // Adjust the path as necessary

// Create a new product
const createProduct = async (req, res) => {
    const { title, description, category, price, image, rating } = req.body;

    try {
        const newProduct = new ProductModel({
            product_id: uuidv4(), // Generate a new UUID for the product
            title,
            description,
            category,
            price,
            image,
            rating
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await ProductModel.findOne({ product_id: id }); // Match by product_id

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find(); // Fetch all products
        console.log('Fetched products:', products); // Log the fetched products
        if (products.length === 0) { // Check if no products are found
            return res.status(404).json({ message: 'No products found' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a product by ID
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedProduct = await ProductModel.findOneAndUpdate({ product_id: id }, updateData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log(`Deleting product with ID: ${id}`); // Log the ID being used

    try {
        const deletedProduct = await ProductModel.findOneAndDelete({ product_id: id });

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.json({message:err.message});                                                                                                                                            
    }
};

// Export all functions
module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct
};
