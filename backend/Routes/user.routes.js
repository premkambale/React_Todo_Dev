const express = require("express");
const router = express.Router();
const verifyToken = require("../Middlewares/verifyToken");
const { userController } = require("../Controllers");
// const authMiddleware = require('../Middlewares/authMiddleware.js')
const taskRoutes = require('../Routes/task.routes')
router.all("/*", verifyToken);

<<<<<<< HEAD
=======
router.use('/task',taskRoutes)

>>>>>>> 92fd1df0ead420b6684e065d8ad06d2fa7560410
router
  .route("/profile")
  .get(userController.getProfile)
  .patch(userController.updateProfile)
  .delete(userController.deleteProfile);

<<<<<<< HEAD
// router.route("/profile/:id").patch(userController.updateProfile);
// router.route("/profile").get(userController.getProfile).patch(userController.updateProfile).delete(userController.deleteProfile);
=======
>>>>>>> 92fd1df0ead420b6684e065d8ad06d2fa7560410

module.exports = router;
