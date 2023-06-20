const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')

router.all("/*", verifyToken);

router
  .route("/profile")
  .get(userController.getProfile)
  .delete(userController.deleteProfile);

router.route("/profile/:id").patch(userController.updateProfile);
// router.route("/profile").get(userController.getProfile).patch(userController.updateProfile).delete(userController.deleteProfile);

module.exports = router;
