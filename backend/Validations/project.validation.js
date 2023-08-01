const joi = require("joi");

const addproject = joi.object({
  projectOwnerID: joi.string().required(),
  projectTitle: joi.string().trim().required(),
  projectDescription: joi.string().trim(),
  projectDueDate: joi.date().min("now").required(),
  projectStatus: joi.string().required(),
  projectMembers: joi.array().items(joi.string().required()).required().min(1),
});

const updateProject = joi.object({
  projectTitle: joi.string().trim(),
  projectDescription: joi.string().trim(),
  projectDueDate: joi.date().min("now"),
  projectStatus: joi.string(),
  projectMembers: joi.array().items(joi.string()).min(1),
  tasks: joi.array().items(joi.string()).min(1),
})

const assignNewTask = joi.object({
  taskTitle: joi.string().trim().required(),
  taskDescription: joi.string().trim(),
  taskDueDate: joi.date().min("now").required(),
  taskStatus: joi.string().required(),
});

module.exports = { addproject, assignNewTask,updateProject };
