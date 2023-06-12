const express = require("express");
const router = express.Router();
const userDB = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const userController = require("../Controllers/userController");

// verify customers token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization.split(" ")[1];

  if (authHeader) {
    jwt.verify(authHeader, "task-management", (err, user) => {
      if (err) return res.status(403).send("Invalid token");

      req.user = user;
      next();
    });
  } else {
    res.send(401).json("user not authorised");
  }
};

// register new user
router.post("/registration", userController.registerUser);
// login existing user
router.get("/login", userController.loginUser);
// get profile data
router.get("/profile", verifyToken, userController.getProfile);



module.exports = router;
