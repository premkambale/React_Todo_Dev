const joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

  const loginSchema = joi.object({
    email: joi.string().required(),
    password : joi.string().required()
  })

  module.exports = validator(loginSchema)