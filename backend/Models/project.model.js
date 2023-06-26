const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  projectTitle: String,
  projectDescription: String,
  projectDueDate: String,
  projectStatus: String,
  projectMembers: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: "user"
  }]
    // }],
    // memberID: {
    //   type:mongoose.Schema.Types.ObjectId,
    //   ref: "user"
    // },
    // memberName: String,
    // profile: String
  
}, { timestamps: true });

module.exports = mongoose.model("project", projectSchema);
