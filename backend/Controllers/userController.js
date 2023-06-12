const {
  validateRegistration,
} = require("../Validations/registrationValidations");
const bcrypt = require("bcrypt");
const userDB = require("../Models/userModel");
const jwt = require('jsonwebtoken');
const secretKey = "task-management"


const registerUser = async (req, res) => {
  const { error, value } = validateRegistration(req.body);

  if (error) {
    return res.status(401).send(error.details[0]);
  }

  if (await userDB.findOne({ email: req.body.email }))
    return res.send({ message: "user registered already with this email-id" });

  async function getHashedPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  const newUser = new userDB({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: await getHashedPassword(req.body.password),
    confirmPassword: req.body.confirmPassword,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    date: new Date()
  });

  try {
    var postedUserData = await newUser.save();
    var data = {
      message: "user Registered successfully",
      success: true
    };

    res.send(data);
  } catch (err) {
    res.send({ message: err.message });
  }
};

const loginUser = async (req, res) => {

  const userData = await userDB.findOne({ email: req.body.email })

  if (userData) {
    bcrypt.compare(req.body.password, userData.password, (err, data) => {

      if (err)
        return res.send(err)

      if (data) {
        jwt.sign({ id: userData._id }, secretKey, { expiresIn: "1h" }, (err, token) => {

          const decode = jwt.verify(token, secretKey);
          res.json({ success: true, decode })

        })
      } else
        return res.send({ message: 'Invalid Password' });
    })
  } else {
    return res.send({ message: 'User does not exist' })
  }
};

module.exports = { registerUser, loginUser };
