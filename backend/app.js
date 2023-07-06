const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv/config");

// routes
const routes = require('./Routes');

// middleware 
app.use(bodyParser.json())      // middleware to converte HTTP req body to json
app.use(cors())
app.use("/", routes)

module.exports = app;