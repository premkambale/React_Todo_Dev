const express = require("express");
const router = express.Router();
const userDB = require("../Models/authModel");
const jwt = require("jsonwebtoken");
const authController = require("../Controllers/auth.controller");



// register new user
router.post("/registration", authController.registerUser);
// login existing user
router.get("/login", authController.loginUser);

module.exports = router;
