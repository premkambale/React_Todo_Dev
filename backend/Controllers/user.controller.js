const userDB = require("../Models/authModel");
const validate = require("../Validations/index");

// function validateUserInfo(req,res) {
//   const {error,value} = validate.userValidation(req.body)

//   if(error)
//  return  res.status(400).send(error)
// }

const getProfile = async (req, res) => {
  // const user = await userDB.find({ _id: req.id });
  // validateUserInfo(req,res)
  const { error, value } = validate.userValidation(req.body);
  if (error) return res.status(400).send(error);

  var user = await userDB.findOne({ _id: req.id });

  user.password = undefined;
  console.log(user);

  res.status(200).send(user);
};

const updateProfile = async (req, res) => {
  // console.log(req.params);
  // validateUserInfo(req,res)

  try {
    if (req.body) {
      const updatedData = await userDB.updateOne(
        { _id: req.params.id },
        {
          $set: req.body,
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
