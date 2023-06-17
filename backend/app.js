const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv/config");


console.log('IN app.js');

// routes
// const authRoutes = require('./Routes/authRoutes')
const routes = require('./Routes/index.js');
const verifyToken = require('./Middlewares/verifyToken');

// middleware 
app.use(bodyParser.json())      // middleware to converte HTTP req body to json
app.use(cors())
// app.use('/auth', authRoutes)
app.use("/", routes)

app.get('/',(req,res)=>{
    res.send('homepage accessed')
})

module.exports = app;