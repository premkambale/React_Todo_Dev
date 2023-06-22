const { userCollection } = require("../Models");

const isEmailPresent = async (req) => {
  return await userCollection.findOne({ email: req.body.email });
};

const findUserById = async(req)=>{
  return await userCollection.findOne({ _id: req.user_id });
}

const updateUser = async (req, value) => {
  return await userCollection.updateOne(
    { _id: req.user_id },
    {
      $set: value,
    }
  );
};

const deleteUser = async (req)=>{
  return await userDB.userCollection.deleteOne({
    _id: req.user.id,
  })
}

module.exports = {
  isEmailPresent,
  updateUser,
  deleteUser,
  findUserById
};
