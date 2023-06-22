const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectTitle: String,
  description: String,
  isCompleted: Boolean,
  isPending: Boolean,
  completedPercentage: Number,
  date: String,
});

module.exports = mongoose.model("project", projectSchema);
