const { userCollection, projectCollection } = require("../Models");
// const {  } = require("../Models");

const isEmailPresent = async (req) => {
  return await userCollection.findOne({ email: req.body.email });
};

const findUserById = async (req) => {
  return await userCollection.findOne({ _id: req.user_id });
};

const findAllUsers = async () => {
  const allUsers = await userCollection.find();
  return allUsers;
}

const updateUser = async (req, value) => {
  return await userCollection.updateOne(
    { _id: req.user_id },
    {
      $set: value,
    }
  );
};

const getProjectListByStatus = async (req) => {
  console.log(req.query.projectStatus);
  return await projectCollection.find({ projectStatus: req.query.projectStatus });
};

const deleteUser = async (req) => {
  return await userDB.userCollection.deleteOne({
    _id: req.user.id,
  });
};

// add project ID in users peoject[]
const addTaskID = async (taskOwnerID,taskID) => {
  return await userCollection.updateOne(
    { _id: taskOwnerID },
    {
      $push: {
        task : taskID
      }
    }
  );
}

module.exports = {
  isEmailPresent,
  updateUser,
  deleteUser,
  findAllUsers,
  findUserById,
  getProjectListByStatus, addTaskID
};
