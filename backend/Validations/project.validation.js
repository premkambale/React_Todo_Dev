const joi = require("joi");

const addproject = joi.object({
  projectTitle: joi.string().trim().required(),
  projectDescription: joi.string().trim(),
  projectMembers: joi.array().items(
    joi.object({
      memberID: joi.string().required(),
      name: joi.string().required(),
      // profile: joi.string().required()
    })
  ).required().min(1),
  dueDate: joi.date().min('now').required(),
  projectStatus: joi.string().required()
});

module.exports = { addproject };