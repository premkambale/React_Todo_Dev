const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectOwnerID: String,
  projectTitle: String,
  projectDescription: String,
  projectDueDate: String,
  projectStatus: String,
  projectMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "task"
  }]
}, { timestamps: true });

module.exports = mongoose.model("project", projectSchema);
