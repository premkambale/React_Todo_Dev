
const mongoose = require('mongoose')

// by using this schema data will stored in this format in mongodb
const userRegistrationSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    }, lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },

})

// const userLoginSchema = mongoose.Schema({
//     email: {
//         type: String,
//         required: true``
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

module.exports = mongoose.model('user', userRegistrationSchema);