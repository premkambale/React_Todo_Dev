const joi = require("joi");

const updateUser = joi.object({
  firstName: joi.string().trim(),
  lastName: joi.string().trim(),
  email: joi.string().email().trim(),
  mobileNo: joi.string().length(10).trim(),
  tasks : joi.array()
});

module.exports = { updateUser };
