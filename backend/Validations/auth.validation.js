  const joi = require('joi')
  
  const login = joi.object({
    email: joi.string().email().required(),
    password : joi.string().required()
  })

  const register = joi.object({
    firstName: joi
      .string()
      .trim()
      .required()
      .regex(/^[a-zA-Z]+$/)
      .messages({
        "string.pattern.base": "Username contain only characters.",
      }),
    lastName: joi.any().not(joi.ref("firstName")).required(),
    password: joi.string().min(4).required(),
    confirmPassword: joi.equal(joi.ref("password")).messages({
      "any.only": "password and confirm password do not match.",
    }).required(),
    email: joi.string().email().required(),
    mobileNo: joi
      .string()
      .length(10)
      .messages({ "string.pattern.base": `Phone number must have 10 digits.` }),
  });

  module.exports = {
    login,
    register
  }