const { validate } = require("../Middlewares");
const { taskValidation } = require("../Validations");
const {taskCollection} = require("../Models")


const addNewTask = async (req, res) => {
  req.body.taskStatus = "pending"

  const { error, value } = validate.validateJoiSchema(taskValidation.taskSchema)(req.body)
  if (error)
    return res.status(400).send({ message: error.message })
    
    const newTask = new taskCollection({
      ...value,
    }).save()
    .then( response=>{
      res.send({
        message : "task assigned successfully",
        success : true
      })
    }).catch(error =>{
      res.send({
        message : err.message
      })
    })
  // return res.send({ message: "add new task remaning" });
};

module.exports = {
  addNewTask
}