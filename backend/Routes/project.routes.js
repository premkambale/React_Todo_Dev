const express = require('express');
const { projectController } = require('../Controllers');
const router = express.Router();

router.post('/add-project',projectController.addProject)
router.get('/',projectController.getProjectByStatus)

module.exports = router;