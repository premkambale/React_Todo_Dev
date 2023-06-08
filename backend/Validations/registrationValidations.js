const joi = require('joi')

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false }); //// bydefault abortEarly = true

const registrationSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  password: joi.string().min(4),
  confirmPassword: joi.valid(joi.ref("password")).label('Confirm password').messages({ 'any.only': `confirm password does not match` }),
  email: joi.string().email().required(),
  mobileNo: joi
    .string()
    .length(10)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
});


exports.validateRegistration = validator(registrationSchema)