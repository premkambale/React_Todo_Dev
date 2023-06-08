const express = require('express');
const router = express.Router();
const userDB = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


router.post('/', async (req, res) => {
    async function getHashedPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    const newUser = new userDB({
        userName: req.body.userName,
        password: await getHashedPassword(req.body.password),
        confirmPassword: req.body.confirmPassword,
        email: req.body.email,
        mobileNo: req.body.mobileNo
    })

    try {
        const postedUserData = await newUser.save();
        res.send(postedUserData)
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router;
