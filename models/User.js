const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        default: 'https://images.pexels.com/photos/4307693/pexels-photo-4307693.jpeg?auto=compress&cs=tinysrgb&w=800'
    }

}, { timeStamps: true })


module.exports = mongoose.model("User", UserSchema);