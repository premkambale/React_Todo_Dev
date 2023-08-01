const { projectCollection } = require("../Models");
const getProjectByID = async (projectId) => {
    try {
        return await projectCollection.find({ _id: projectId }).populate('tasks').exec()
    } catch (err) {
        console.log(err);
    }
}

const updateNewTask = async (updatedProjectData, projectId) => {
    return await projectCollection.updateOne({ _id: projectId }, { $set: updatedProjectData })
}

const addTaskID = async (projectID, taskID) => {

    return await projectCollection.updateOne({ _id: projectID }, { $push: { tasks: taskID } })
}

const deleteProjectByID = async (projectID) => {
    return await projectCollection.deleteOne({ _id: projectID });
}

const updateProject = async (projectId, payload) => {
    return await projectCollection.updateOne({ _id: projectId }, { $set: payload })
}
module.exports = {
    getProjectByID,
    updateNewTask,
    addTaskID,
    deleteProjectByID,
    updateProject
}