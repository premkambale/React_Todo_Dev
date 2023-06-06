
const express = require('express')
const app = express();
const portNo = 5100;
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');
const bodyParser = require('body-parser')
const cors = require('cors')

// routes
const userRoutes = require('./Routes/userRoutes')


// middleware 
app.use(bodyParser.json())      // middleware to converte HTTP req body to json
app.use(cors())
app.use('/registration', userRoutes)


// start server 
app.listen(portNo, () => {
    console.log(`\nServer Started Successfully on port ${portNo} !!!`);
    console.log(process.env.DB_CONNECTION);
});

// connect nodejs to mongodb database
mongoose.connect(process.env.DB_CONNECTION)
    .then(res => console.log("mongodb connected successfully !!!"))
    .catch(err => console.log(err))

