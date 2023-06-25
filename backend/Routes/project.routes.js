const express = require('express');
const { projectController } = require('../Controllers');
const router = express.Router();

// get all project according to the status
router.get('/', projectController.getProjectByStatus)
// add new project 
router.post('/add-project', projectController.addProject)

router.route('/project/:projectId').get(projectController.getProjectByID).patch(projectController.updateProject)


module.exports = router;