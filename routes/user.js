var bcrypt = require('bcryptjs');
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const router = require("express").Router();


router.get("/", (req, res) => {
    try {
        res.status(200).json("Hello world");
    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.post("/signup", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.user.email });
        console.log(user);
        if (user) {
            res.status(403).json("User with this email already exists");
        }
        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(req.body.user.password, salt);
        const newUser = new User({ ...req.body.user, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWTKEY, {
            expiresIn: "7d",
        })


        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
            token: token
        });
    } catch (err) {
        console.error(err.message); // Log the error message
        res.status(500).json(err.message); // Respond with the error message
    }
});


router.post("/login", async (req, res) => {
    try {

        const requestedUser = await User.findOne({ email: req.body.user.email });
        if (!requestedUser) {
            res.json(404).json("User with this email not found");
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.user.password, requestedUser.password); // true

        if (!isPasswordCorrect) {
            res.json(404).json("Wrong password");
        }

        const token = jwt.sign({ id: requestedUser._id }, process.env.JWTKEY)


        const { password, ...others } = requestedUser._doc;
        console.log(others);

        res.status(201).json({
            _id: requestedUser._id,
            name: requestedUser.name,
            email: requestedUser.email,
            pic: requestedUser.pic,
            token: token
        });

        // res.cookie("access_token", token, {
        //     httpOnly: true
        // }).status(200).json(others);


    }
    catch (err) {
        res.status(500).json(err.message);
    }
})



module.exports = router;