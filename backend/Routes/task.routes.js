const express = require('express');
const { taskController } = require('../Controllers');
const router = express.Router();

router.post('/pending-tasks',taskController.addTask)

// router.route('/completed-tasks').get((req,res)=>{
//     res.send('accessed task completed')
// }).post()

module.exports = router;