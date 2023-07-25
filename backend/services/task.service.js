// delete all task document according to the task ID array

const { taskCollection } = require("../Models")

// Delete all associated tasks
const deleteTaskArrayByIDs = async (taskIDsArray) => {
    // await Task.deleteMany({ _id: { $in: taskIds } });
    await taskCollection.deleteMany({ _id: { $in: taskIDsArray } })
}

module.exports = {
    deleteTaskArrayByIDs
}