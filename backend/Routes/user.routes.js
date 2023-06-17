const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')

router.all("/*", verifyToken);

// get profile data
// router.get("/profile", userController.getProfile);

//update the profile
// router.patch("/profile", userController.updateProfile);

// delete profile
// router.delete("/profile", userController.deleteProfile);

router
  .route("/profile")
  .get(userController.getProfile)
  .delete(userController.deleteProfile);

router.route("/profile/:id").patch(userController.updateProfile);
// router.route("/profile").get(userController.getProfile).patch(userController.updateProfile).delete(userController.deleteProfile);

module.exports = router;
