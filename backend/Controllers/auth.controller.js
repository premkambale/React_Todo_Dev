
const bcrypt = require("bcrypt");
const { userCollection } = require("../Models");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv/config");
const {validate} = require("../Middlewares");
const {authValidation} = require("../Validations");
const { userService } = require("../services");

const registerUser = async (req, res) => {
  const { error, value } = validate.validateJoiSchema(authValidation.register)(req.body);

  if (error) {
    return res.status(400).send(error.details[0]);
  }

  // console.log(await user.checkEmailPresent(req));

  if (await userService.isEmailPresent(req))
    return res
      .status(409)
      .send({ message: "user registered already with this email-id" });

  async function getHashedPassword(password) {
    // const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, 10);
  }

  const payload = { ...req.body, ...value, date: new Date() };
  payload.password = await getHashedPassword(req.body.password);

  const newUser = new userCollection(payload); 

  try {
    await newUser.save();

    res.send({
      message: "user Registered successfully",
      success: true,
    });
  } catch (err) {
    res.send({ message: err.message });
  }
};

const loginUser = async (req, res) => {

  const { error, value } = validate.validateJoiSchema(authValidation.login)(req.body);

  if (error) {
    return res.status(401).send(error.details[0]);
  }

  const userData = await userService.isEmailPresent(req);

  if (userData) {
    bcrypt.compare(req.body.password, userData.password, (err, data) => {
      if (err) return res.send({ message : err.message});

      if (data) {
        jwt.sign(
          { id: userData._id },
          process.env.SECRETKEY,
          { expiresIn: process.env.JWT_EXPIRES_IN },
          (err, token) => {
            userData.password = undefined;
            userData.mobileNo = undefined;
            if (token) res.json({ success: true, token, userData });
            else return res.json({ message: err });
          }
        );
      } else return res.send({ message: "Invalid Password" });
    });
  } else {
    return res.send({ message: "User does not exist" });
  }
};

module.exports = { registerUser, loginUser };
