const jwt = require('jsonwebtoken');
const user = require("../models/User")
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWTKEY)

            req.user = await user.findById(decoded.id).select("-password");

            next();
        }

        catch (err) {
            res.status(401).json("Not authorized, token failed")
        }
    }

    if (!token) {
        res.status(401).json("No token found")
    }
})

module.exports = { protect };