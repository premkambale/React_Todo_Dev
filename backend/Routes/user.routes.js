const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')
const projectRoutes = require('./project.routes')
router.all("/*", verifyToken);

router.use('/project',projectRoutes)

router
  .route("/profile")
  .get(userController.getProfile)
  .patch(userController.updateProfile)
  .delete(userController.deleteProfile);


module.exports = router;
