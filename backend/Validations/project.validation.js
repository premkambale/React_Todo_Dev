const joi = require("joi");

const addproject = joi.object({
  projectTitle: joi.string().trim().required(),
  projectDescription: joi.string().trim(),
  projectDueDate: joi.date().min('now').required(),
  projectStatus: joi.string().required(),
  projectMembers: joi.array().items(
    joi.object({
      memberID: joi.string().required(),
      memberName: joi.string().required(),
      // profile: joi.string().required()
    })
  ).required().min(1),
  
});


const assignNewTask = joi.object({
  taskOwnerID: joi.string().required(),
  taskTitle: joi.string().trim().required(),
  taskDescription: joi.string().trim(),
  taskDueDate: joi.date().min('now').required(),
  taskStatus: joi.string().required(),
})

module.exports = { addproject,assignNewTask };