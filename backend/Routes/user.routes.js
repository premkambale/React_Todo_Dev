const express = require("express");
const router = express.Router();
const {verify} = require("../Middlewares");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')
const projectRoutes = require('./project.routes')

router.all("/*", verify.verifyToken);

router.use('/projects',projectRoutes)

router
  .route("/profile")
  .get(userController.getProfile)
  .patch(userController.updateProfile)
  .delete(userController.deleteProfile);


module.exports = router;
