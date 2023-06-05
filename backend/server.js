
const express = require('express')
const app = express();
const portNo = 5100;
const mongoose = require('mongoose');
const url = 'mongodb+srv://sagarthakare:@mongodb@123@cluster0.ysrtc7j.mongodb.net/'

// routes


// start server 
app.listen(portNo,()=>{
    console.log(`\nServer Started Successfully on port ${portNo} !!!`);
});

mongoose.connect('mongodb+srv://sagarthakare:%40mongodb%40123@cluster0.ysrtc7j.mongodb.net/')
.then(res=>console.log("mongodb connected successfully !!!"))
.catch(err=>console.log("database not connected"))

