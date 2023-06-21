const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')
const taskRoutes = require('../Routes/task.routes')
router.all("/*", verifyToken);

router.use('/task',taskRoutes)

router
  .route("/profile")
  .get(userController.getProfile)
  .patch(userController.updateProfile)
  .delete(userController.deleteProfile);


module.exports = router;
