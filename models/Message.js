const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender: {
        type: String
    },
    content: {
        type: String,
        trim: true
    },
    chat: {
        //to which schema does it belongs
        type: String,
    }

}, { timeStamps: true })


module.exports = mongoose.model("Message", MessageSchema);