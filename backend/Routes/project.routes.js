const express = require('express');
const router = express.Router();
const { taskController, projectController } = require('../Controllers');
const taskRoutes = require('./task.routes')

// router.use('/task',)
router.use('/:projectId/task',taskRoutes)
// get all project according to the status
router.get('/', projectController.getProjectByStatus)
// add new project 
router.post('/add-project', projectController.addProject)

router.route('/project/:projectId').
    get(projectController.getProjectByID).
    patch(projectController.updateProject).
    delete(projectController.deleteProjectByID)



router.post('/project/add-task', )


module.exports = router;