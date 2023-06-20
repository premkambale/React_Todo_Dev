const joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false }); // bydefault abortEarly = true

const registrationSchema = joi.object({
  firstName: joi
    .string()
    .trim()
    .required()
    .regex(/^[a-zA-Z]+$/)
    .messages({
      "string.pattern.base": "Username contain only characters.",
    }),
  lastName: joi.any().not(joi.ref("firstName")),
  password: joi.string().min(4).required(),
  confirmPassword: joi.equal(joi.ref("password")).messages({
    "any.only": "password and confirm password do not match.",
  }).required(),
  email: joi.string().email().required(),
  mobileNo: joi
    .string()
    .length(10)
});

module.exports = validator(registrationSchema);
