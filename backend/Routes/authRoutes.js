const express = require("express");
const router = express.Router();
const userDB = require("../Models/authModel");
const jwt = require("jsonwebtoken");
const userController = require("../Controllers/authController");



// register new user
router.post("/registration", userController.registerUser);
// login existing user
router.get("/login", userController.loginUser);

module.exports = router;
