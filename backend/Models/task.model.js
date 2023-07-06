const mongoose = require("mongoose");

const taskSchema = new mongoose.TaskSchema(
  {
    taskOwnerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    }, 
    taskTitle: String,
    taskDescription: String,
    taskDueDate: String,
    taskStatus: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("task", taskSchema);
