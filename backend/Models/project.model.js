const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectTitle: String,
  projectDescription: String,
  projectDueDate: String,
  projectStatus: String,
  projectMembers: [{
    memberID: {
      type:mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    memberName: String,
    // profile: String

    tasks: [{
      taskOwnerID: mongoose.Schema.Types.ObjectId,        // i think this is unnecessary
      taskTitle: String,
      taskDescription: String,
      taskDueDate: String,
      taskStatus: String
    }]
  }],
}, { timestamps: true });

module.exports = mongoose.model("project", projectSchema);
