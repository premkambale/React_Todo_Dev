const mongoose = require("mongoose");

// by using this schema data will stored in this format in mongodb
const userRegistrationSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNo: {
    type: Number,
  },  
  tasks: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }]
  ,
  date: {
    type: String,
  },
});

module.exports = mongoose.model("user", userRegistrationSchema);
