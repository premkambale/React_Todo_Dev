const { projectCollection } = require("../Models");
const getProjectByID = async (projectId) => {
    // console.log(' projectId : ' ,projectId);

    // check projectId here
    return await projectCollection.find({ _id: projectId })
}

const updateNewTask = async (updatedProjectData, projectId) => {
    return await projectCollection.updateOne({ _id: projectId }, { $set: updatedProjectData })
}

const addTaskID = async (projectID, taskID) => {

    return await projectCollection.updateOne({ _id: projectID }, { $push: { tasks: taskID } })
}
module.exports = {
    getProjectByID,
    updateNewTask,
    addTaskID
}