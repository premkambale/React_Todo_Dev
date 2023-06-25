const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv/config");

console.log('IN app.js');

// routes
const routes = require('./Routes/index.js');

// middleware 
app.use(bodyParser.json())      // middleware to converte HTTP req body to json
app.use(cors())
app.use("/", routes)

module.exports = app;