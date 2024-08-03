// const jwt =require('jsonwebtoken');
// //auth fn,
// const auth =(req,res,next)=>{
//     //const token =req.header('authorization').replace('bearer','hg');//token extract req.header
//     //from frontend -> token got from acces token
//     //or

//  /*   headers la data ipdi varum
//  "Bearer suhbshfhjhsfehhsdfjhbhjshb"
// ["Bearer", "suhbshfhjhsfehhsdfjhbhjshb"] */
// /*
//   middle ware ->to protect route
// */ 
    
//     const token =req.header('Authorization').split(' ')[1];//split->web string split 
//     //token is split and senrt as {1,2,3,4}
//     if(!token) return res.status(401).json({error:'token required'});//if token not got
//     try{
//         const decoded =jwt.verify(token,"rishitha");//to verify token jwt.verify
//         req.user =decoded.userId;
//         next();

//     }catch(err){
//         res.status(401).json({error:"invalid token"});//after expiry access panna
//         //intha error
//     }
// };
// module.exports=auth;
/*
const jwt = require('jsonwebtoken');

// Authentication middleware function
const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'Token required' });
    }

    const token = authHeader.split(' ')[1]; // Split and get the token part
    if (!token) {
        return res.status(401).json({ error: 'Token required' });
    }

    try {
        const decoded = jwt.verify(token, "rishitha"); // Verify the token
        req.userId = decoded.userId; // Set the userId on req object
        next(); // Call the next middleware function
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' }); // Handle invalid token error
    }
};

module.exports = auth;


*/
const jwt = require('jsonwebtoken');

// Authentication middleware function
const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ error: 'Token required' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token required' });
    }

    try {
        const decoded = jwt.verify(token, "rishitha"); // Ensure the secret matches
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = auth;
