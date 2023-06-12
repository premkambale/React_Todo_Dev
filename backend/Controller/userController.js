const {
  validateRegistration,
} = require("../Validations/registrationValidations");
const bcrypt = require("bcrypt");
const userDB = require("../Models/userModel");

const registerUser = async (req, res) => {
  const { error, value } = validateRegistration(req.body);

  if (error) {
    console.log(error);
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
  res.send("logged in");
};


const verifyToken = (req,res,next)=>{}

const getProfile = async (req,res)=>{

  // console.log(req.);
  res.status(200).send('profile data accessed')


}

module.exports = { registerUser, loginUser , getProfile };
