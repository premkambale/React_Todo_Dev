const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    taskTitle : String,
    isComplete : Boolean,
    completedPercentage : Number,
    date : new Date()
})

module.exports = mongoose.model('task',taskSchema)