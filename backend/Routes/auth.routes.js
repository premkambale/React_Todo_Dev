const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {authController} = require("../Controllers");

// register new user
router.post("/registration", authController.registerUser);
// login existing user
router.post("/login", authController.loginUser);

module.exports = router;
