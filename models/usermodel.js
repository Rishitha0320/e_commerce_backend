/*const mongoose=require('mongoose')
const bcrypt =require("bcryptjs")
//bcrypt->password->hash(convert),hash check during login 

const userSchema = new mongoose.Schema({

     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        unique:true,
        required:[true , "email is required"]
        
     },
     password:{
        type:String,
        required:[true , "password is required"]
        
     }

});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) 
    return next();
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next();
})

const userModel =mongoose.model("users",userSchema)
module.exports =userModel 
*/
/*
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
});

// Pre-save hook to hash the password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('Password hashed:', this.password); // Debugging line
        next();
    } catch (error) {
        console.error('Error hashing password:', error);
        next(error);
    }
});

// Create and export the user model
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
});

// Pre-save hook to hash the password
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('Password hashed:', this.password); // Debugging line
        next();
    } catch (error) {
        console.error('Error hashing password:', error);
        next(error);
    }
});

// Create and export the user model
const UserModel = mongoose.model("Users", userSchema); // Changed "users" to "User"
module.exports = UserModel;

