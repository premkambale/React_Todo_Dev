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
  lastName:   joi.any().equal(joi.ref('firstName')),
  password: joi.string().min(4),
  confirmPassword: joi.valid(joi.ref("password")),
  email: joi.string().email().required(),
  mobileNo: joi
    .string()
    .length(10)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
});

module.exports = validator(registrationSchema);
