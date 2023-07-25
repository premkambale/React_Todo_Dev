const express = require('express');
const { taskController, projectController } = require('../Controllers');
const router = express.Router();


// get all project according to the status
router.get('/', projectController.getProjectByStatus)
// add new project 
router.post('/add-project', projectController.addProject)

router.route('/project/:projectId').
    get(projectController.getProjectByID).
    patch(projectController.updateProject).
    delete(projectController.deleteProjectByID)

router.post('/project/add-task', taskController.addNewTask)


module.exports = router;