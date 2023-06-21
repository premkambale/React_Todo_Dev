const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskTitle: String,
  description: String,
  isCompleted: Boolean,
  isPending: Boolean,
  completedPercentage: Number,
  date: String,
});

module.exports = mongoose.model("task", taskSchema);
