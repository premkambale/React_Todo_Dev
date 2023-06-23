const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectTitle: String,
  projectDescription: String,
  projectMembers : [{
    memberID:mongoose.Schema.Types.ObjectId,
    name : String,
    // profile: String
  }],
  dueDate : String,
  projectStatus : String,
},{timestamps:true});

module.exports = mongoose.model("project", projectSchema);
