const { projectCollection } = require("../Models");
const getProjectByID = async (projectId) => {
    // console.log(' projectId : ' ,projectId);

    // check projectId here
    return await projectCollection.find({ _id: projectId })
}

const updateNewTask = async (updatedProjectData, projectId) => {
    return await projectCollection.updateOne({ _id: projectId }, { $set: updatedProjectData })
}

module.exports = {
    getProjectByID,
    updateNewTask
}