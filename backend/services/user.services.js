const { userCollection } = require("../Models");

userCollection;

const isEmailPresent = async (req) => {
  return await userCollection.findOne({ email: req.body.email });
};

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
  deleteUser
};
