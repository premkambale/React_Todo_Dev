// delete all task document according to the task ID array

const { taskCollection } = require("../Models")

// Delete all associated tasks
const deleteTaskArrayByIDs = async (taskIDsArray) => {
    // await Task.deleteMany({ _id: { $in: taskIds } });
    await taskCollection.deleteMany({ _id: { $in: taskIDsArray } })
}

// delete 1 task by ID
const deleteTaskById = async (taskId) => {
    await taskCollection.deleteOne({ _id: taskId })
}

module.exports = {
    deleteTaskArrayByIDs,
    deleteTaskById
}