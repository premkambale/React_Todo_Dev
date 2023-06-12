const express = require("express");
const router = express.Router();
const userDB = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const userController = require('../Controller/userController')

// register new user
router.post("/registration",userController.registerUser );
// login existing user
router.get('/login',userController.loginUser)
// get profile data
router.get('/profile',userController.getProfile)


module.exports = router;
