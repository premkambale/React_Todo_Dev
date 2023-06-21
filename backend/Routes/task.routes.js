const express = require('express');
const router = express.Router();
// const taskCollection = require('../')

router.get('/completed-task',(req,res)=>{
    res.send('accessed task completed')
})

router.route('/completed-task').get((req,res)=>{
    res.send('accessed task completed')
}).post(async(req,res)=>{
    
    // const newTask = new taskCollection({
    //     taskTitle : 'new task',
    //     isComplete : true,
    //     completedPercentage : 50,
    //     date : new Date()
    // })

    res.send('completed task posted')
})

module.exports = router;