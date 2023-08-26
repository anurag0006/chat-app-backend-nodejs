const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    chatName: {
        type: String,
        trim: true,
    },
    isGroupChat: {
        type: Boolean,
        default: false,
    },
    users: {
        type:[String],
    }
    ,
    latestMessage: {
        type: String,
    },
    groupAdmin: {
        type: String,
        required: true,
    },


}, { timeStamps: true })


module.exports = mongoose.model("Chat", ChatSchema);