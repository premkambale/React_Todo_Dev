const { validate } = require("../Middlewares");
const { taskValidation } = require("../Validations");
const { taskCollection, userCollection } = require("../Models");
// const { projectController, userController } = require(".");
const { userService, projectService, taskService } = require("../services");


const addNewTask = async (req, res) => {
  req.body.taskStatus = "pending"

  console.log(req.params);

  // const { error, value } = validate.validateJoiSchema(taskValidation.taskSchema)(req.body)
  // if (error)
  //   return res.status(400).send({ message: error.message })

  // const newTask = new taskCollection({
  //   ...value,
  // }).save()
  //   .then(response => {
  //     userService.addTaskID(response.taskOwnerID, response._id)
  //     projectService.addTaskID (response.projectID, response._id)
  //     // console.log(response);

  //     res.send({
  //       message: "task assigned successfully",
  //       success: true
  //     })
  //   }).catch(error => {
  //     res.send({
  //       message: error.message
  //     })
  //   })
  return res.send({ message: "add new task remaning" });
};

const deleteTaskById = async (req, res) => {
  res.send(taskService.deleteTaskById(req.params.taskId))
}


module.exports = {
  addNewTask, deleteTaskById
}