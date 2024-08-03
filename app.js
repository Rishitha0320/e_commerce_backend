/*const productRoutes=require("./routes/productRoutes")
const userRoutes =require("./routes/userRoutes")
const addtocartroute =require('./routes/addtocartroute')

const orderroutes =require("./routes/orderroute")
const express = require('express')
const cors=require('cors')
const bodyparse=require('body-parser')
const app=express()
app.use(cors())
app.use(bodyparse.json())


const mongoose =require('mongoose')
app.use(express.json()); 
mongoose.connect (
    "mongodb+srv://Rishitha:Rishitha20@mern.bjvhgcw.mongodb.net/e-commerce"
).then(() =>{
    console.log('Connected to MongoDB');
});
app.set('view engine','ejs');

app.use("/", productRoutes);

app.use("/use",userRoutes);
// app.use("/cart",addtocartroutes);
//console.log(addtocartroute); // Should be a function or object

app.use('/cart', addtocartroute);
app.use('/order',orderroutes);







app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}

);

*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const addtocartRoutes = require('./routes/addtocartroute');
const orderRoutes = require("./routes/orderroute");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Rishitha:Rishitha20@mern.bjvhgcw.mongodb.net/ecom"
).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.set('view engine', 'ejs');

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use('/cart', addtocartRoutes);
app.use('/order', orderRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
