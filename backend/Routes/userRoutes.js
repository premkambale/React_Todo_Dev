const express = require('express');
const router = express.Router();
const userDB = require('../Models/userModel')


router.post('/', async (req, res) => {

    const newUser = new userDB({
        name: 'sagar',
        password: 'pass-sagar'
    })

    try {
        const postedUserData = await newUser.save();
        res.send(postedUserData)
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router;
