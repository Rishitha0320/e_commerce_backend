/*const jwt = require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const usermodel =require('../models/usermodel');


// const userModel = require('../Models/userModel');
const register = async(req,res)=>{
    const {name, email,password}= req.body;
    const insertdata = new ({
        name, email,password
    });
    try{
        const inserteddata = await insertdata.save();
        res.status(201).send(inserteddata);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};


//login

const login = async(req,res)=>{
    const {email, password}=req.body;
    try{
        const user = await usermodel.findOne({email});//{email} find user
        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        const isvalidPassword = await bcrypt.compare(password, user.password);
        if(!isvalidPassword ){
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign({userId: user._id}, 'rishitha', {expiresIn: '1h'});
        res.json({token});
    }catch(error){
        res.status(500).json({message: error.message});
        // console.log(err);
    }
}

module.exports={register,login};*/
//userId -> changes
//use const login then export or export.login 

/*

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usermodel = require('../models/usermodel');

// Register function
const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new usermodel({
            name,
            email,
            password
        });

        // Save the new user to the database
        const inserteddata = await newUser.save();
        res.status(201).send(inserteddata);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: error.message });
    }
};

// Login function
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user._id }, 'rishitha', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { register, login };*/

/*
// Register function
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const usermodel = require('../models/usermodel');

// Register function
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Create a new user instance
        const newUser = new usermodel({
            name,
            email,
            password // Plain text password
        });

        // Save the new user to the database
        const inserteddata = await newUser.save();
        res.status(201).send(inserteddata);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: error.message });
    }
};

// Login function

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, 'rishitha', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = { register, login };

*/
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/usermodel'); // Changed 'usermodel' to 'UserModel'

// Register function
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Create a new user instance
        const newUser = new UserModel({
            name,
            email,
            password // Plain text password
        });

        // Save the new user to the database
        const insertedData = await newUser.save(); // Changed 'inserteddata' to 'insertedData'
        res.status(201).send(insertedData);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).json({ message: error.message });
    }
};

// Login function
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, 'rishitha', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { register, login };
