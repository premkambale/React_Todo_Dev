const {validate} = require("../Middlewares");
const { userValidation } = require("../Validations");
const { userService } = require("../services");

const getProfile = async (req, res) => {
  var userData = await userService.findUserById(req);

  userData.password = undefined;

  res.status(200).send(userData);
};

const updateProfile = async (req, res) => {
  const { error, value } = validate.validateJoiSchema(userValidation.updateUser)(req.body);
  if (error) return res.status(400).send(error);

  try {
    if (req.body) {
      const updatedData = await userService.updateUser(req, value);

      return updatedData.modifiedCount > 0
        ? res.send({ message: "profile updated successfully" })
        : res.send({ message: "nothing modified in profile" });
    } else {
      return res.status(400).send({ message: "request body field is empty " });
    }
  } catch (err) {
    return res.send({ message: err.message });
  }
};

const deleteProfile = async (req, res) => {
  const deletedData = await userService.deleteUser(req);

  return deletedData.deletedCount > 0
    ? res.send({ message: "user deleted successfully" })
    : res.send({ message: "user not deleted" });
};

module.exports = { getProfile, updateProfile, deleteProfile };
