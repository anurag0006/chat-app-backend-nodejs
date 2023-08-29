const Chat = require("../models/Chat")


const accesschat = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log("User Id not sent");
        return res.status(404).json("User Id not sent");
    }

    var ischat = await Chat.find({
        isGroupchat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ]
    }).populate("users")
}