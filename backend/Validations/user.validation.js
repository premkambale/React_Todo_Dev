const joi = require("joi");

const getUser = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  email: joi.string().email(),
  mobileNo: joi.string().length(10),
});

module.exports = getUser;
