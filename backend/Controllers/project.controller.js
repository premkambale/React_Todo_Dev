const validate = require("../Middlewares/validate");
const { projectCollection, userCollection } = require("../Models");
const { projectValidation } = require("../Validations");
const { user, projectService } = require("../services");

const addProject = async (req, res) => {
  try {
    req.body.projectStatus = "pending";
    const { error, value } = validate(projectValidation.addproject)(req.body);

    if (error)
      return res.status(401).send({ message: error.details[0].message });

    const newproject = await new projectCollection({
      ...value, //if data changed after validation then data will be ovverride ex: trim
      isCompleted: false,
      isPending: true,
      date: new Date(),
    })
      .save()
      .then(async (response) => {
        const data = await user.findUserById(req);
        if (data) {
          data.project.push(response._id);
          await data.save();
          return res
            .status(201)
            .send({ message: "new Project added successfully" });
        } else {
          return res.send({ message: "invalid token" });
        }
      })
      .catch((err) => {
        return res.status(401).send({ message: err.message });
      });
  } catch (err) {
    res.send(err.message);
  }
};
const getProjectByStatus = async (req, res) => {
  try {
    const SortedProjectList = await user.getProjectListByStatus(req)

    res.status(200).send(SortedProjectList)
  } catch (err) {
    res.send({ message: err.message });
  }
};

const getProjectByID = async (req, res) => {
  const projectData = await projectService.getProjectByID(req.params.projectId);
  return res.send(projectData);
}

const updateProject = async (req, res) => {

  try {
    req.body.taskStatus = "pending";
    const { error, value } = validate(projectValidation.assignNewTask)(req.body);
    if (error)
      return res.status(401).send({ message: error.details[0].message });

    var projectData = await projectService.getProjectByID(req.params.projectId)
    projectData = projectData[0];

    var member = projectData.projectMembers.filter((members) => {
      if (members.memberID == req.body.taskOwnerID)
        return members;
    })
    const newTask = { ...req.body };
    member[0].tasks.push(newTask)
    const assignedTask = member[0]

    const foundIndex = projectData.projectMembers.findIndex(ele => ele.memberID === assignedTask.memberID)
    projectData.projectMembers[foundIndex] = assignedTask;
    console.log(projectData.projectMembers[0].tasks);

    //projectdata = we are passing updated project data 
    const result = await projectService.updateNewTask(projectData, req.params.projectId);
    console.log(result);
    if (result.modifiedCount > 0)
      return await res.status(201). send({ message: "task assigned successfully ", success: true });
    else
      return await res.send({ message: "project controller error " });
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }
}

module.exports = {
  addProject,
  getProjectByStatus,
  getProjectByID,
  updateProject
};
