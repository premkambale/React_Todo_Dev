const joi = require("joi");

const taskSchema = joi.object({
  taskOwnerID: joi.string().required(),
  taskTitle: joi.string().required(),
  taskDescription: joi.string().required(),
  taskDueDate: joi.date().min("now").required(),
  taskStatus: joi.string().required(),
});

module.exports = { taskSchema };