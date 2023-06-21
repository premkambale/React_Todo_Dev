const validate = require("../Middlewares/validate");
const { userCollection } = require("../Models/index");
const { userValidation } = require("../Validations");
const userDB = require("../Models/auth.model");

const getProfile = async (req, res) => {
  var user = await userDB.findOne({ _id: req.user_id });

  user.password = undefined;

  res.status(200).send(user);
};

const updateProfile = async (req, res) => {
  const { error, value } = validate(userValidation.updateUser)(req.body);
  if (error) return res.status(400).send(error);

  try {
    if (req.body) {
      console.log("in up");
      const updatedData = await userCollection.updateOne(
        { _id: req.user_id },
        {
          // $set: { ...req.body, ...value },
          $set: { ...value },
        }
      );
      console.log("updatedData", updatedData);

      return updatedData.modifiedCount > 0
        ? res.send({ message: "profile updated successfully" })
        : res.send({ message: "nothing modified in profile" });
    } else {
      return res.status(400).send({ message: "request body field is empty " });
    }
  } catch (err) {
    return res.send({ message: err });
  }
};

const deleteProfile = async (req, res) => {
  const deletedData = await userDB.userCollection.deleteOne({
    _id: req.user.id,
  });

  return deletedData.deletedCount > 0
    ? res.send({ message: "user deleted successfully" })
    : res.send({ message: "user not deleted" });
};

module.exports = { getProfile, updateProfile, deleteProfile };
