const validate = require("../Middlewares/validate");
const { registrationCollection } = require("../Models");
const { userValidation } = require("../Validations");

const getProfile = async (req, res) => {
  var user = await database.registrationCollection.findOne({ _id: req.id });

  user.password = undefined;

  res.status(200).send(user);
};

const updateProfile = async (req, res) => {
  const { error, value } = validate(userValidation.updateUser)(req.body);
console.log(value)
  if (error) return res.status(400).send(error);

  
  try {
    if (req.body) {
      const updatedData = await registrationCollection.updateOne(
        { _id: req.id },
        {
          $set: {...req.body,...value},
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
  const deletedData = await database.registrationCollection.deleteOne({
    _id: req.user.id,
  });

  return deletedData.deletedCount > 0
    ? res.send({ message: "user deleted successfully" })
    : res.send({ message: "user not deleted" });
};

module.exports = { getProfile, updateProfile, deleteProfile };