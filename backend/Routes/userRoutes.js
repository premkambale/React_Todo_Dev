const express = require('express')
const router = express.Router();

// get profile data
router.get("/profile", verifyToken, userController.getProfile);


module.exports = router;