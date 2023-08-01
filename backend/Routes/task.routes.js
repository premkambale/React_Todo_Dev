
const express = require('express');
const { taskController } = require('../Controllers');
const router = express.Router();


router.delete('/:taskId',taskController.deleteTaskById)
router.post('/add-task',taskController.addNewTask)


module.exports = router