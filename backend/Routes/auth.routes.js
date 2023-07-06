const express = require("express");
const router = express.Router();
const userDB = require("../Models/auth.model");
const jwt = require("jsonwebtoken");
const authController = require("../Controllers/auth.controller");

// register new user
router.post("/registration", authController.registerUser);
// login existing user
router.post("/login", authController.loginUser);

module.exports = router;
