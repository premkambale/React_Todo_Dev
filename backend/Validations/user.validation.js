const joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const userValidation = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  email: joi.string().email(),
  mobileNo: joi.string().length(10),
});

module.exports = validator(userValidation);
