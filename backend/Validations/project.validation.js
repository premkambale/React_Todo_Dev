const joi = require("joi");

const addproject = joi.object({
  projectTitle: joi.string().trim().required(),
  description: joi.string().trim(),
});

module.exports = {addproject};