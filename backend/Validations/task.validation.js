const joi = require("joi");

const addTask = joi.object({
  taskTitle: joi.string().trim().required(),
  description: joi.string().trim(),
});

module.exports = {addTask};