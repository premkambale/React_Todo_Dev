const { projectCollection } = require("../Models");
const getProjectByID = async (projectId) => {
    // console.log(' projectId : ' ,projectId);

    // check projectId here
    return await projectCollection.find({ _id: projectId })
}

const updateNewTask = async (updatedProjectData)=>{
// now we have to upate th new project data
    const projectData = await projectCollection.find({ _id: req.params.projectId});
    console.log(projectData);

    return projectData;
}

module.exports = {
    getProjectByID,
    updateNewTask
}