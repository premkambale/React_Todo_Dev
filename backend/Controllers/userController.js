const userDB = require("../Models/authModel");

const getProfile = async (req, res) => {
  const user = await userDB.find();
  user.password = undefined;

  console.log(user);
  res.status(200).send(user);
};

const updateProfile = async (req, res) => {
  // console.log(req.body);

  try {
    if (req.body) {
      const updatedData = await userDB.updateOne(
        { _id: req.user.id },
        {
          $set: {
            firstName: req.body.firstName,
          },
        }
      );

      return updatedData.modifiedCount > 0
        ? res.send({ message: "profile updated successfully" })
        : res.send({ message: "nothing to update profile" });
    } else {
      return res.status(400).send({ message: "request body field is empty " });
    }
  } catch (err) {
    return res.send({ message: err });
  }
};

const deleteProfile = async (req, res) => {
  const deletedData = await userDB.deleteOne({ _id: req.user.id });

  return deletedData.deletedCount > 0
    ? res.send({ message: "user deleted successfully" })
    : res.send({ message: "user not deleted" });
};

module.exports = { getProfile, updateProfile, deleteProfile };
