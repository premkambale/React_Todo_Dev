const express = require("express");
const router = express.Router();
const userDB = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const userController = require('../Controllers/userController')

// register new user
router.post("/registration", userController.registerUser);
// router.get('/login', userController.loginUser)

// login existing user
router.get('/login',userController.loginUser)

module.exports = router;
