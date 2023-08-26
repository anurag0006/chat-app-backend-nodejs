var bcrypt = require('bcryptjs');
const User = require("../models/User")
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
        const user = await User.find({ email: req.body.email });
        if (user) {
            res.status(403).json("User with this email already exists");
        }
        var salt = bcrypt.genSaltSync(10);
        var hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hashedPassword });
        console.log(newUser);
        await newUser.save();
        res.status(200).json("User created successfully");
    } catch (err) {
        console.error(err.message); // Log the error message
        res.status(500).json(err.message); // Respond with the error message
    }
});


router.post("/login", async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.json(404).json("User with this email not found");
        }



        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password); // true

        if (!isPasswordCorrect) {
            res.json(404).json("Wrong password");
        }

        const token = jwt.sign({ id: requestedUser._id }, process.env.JWTKEY)


        const { password, ...others } = user._doc;
        console.log(others);

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others);


    }
    catch (err) {
        res.status(500).json(err.message);
    }
})



module.exports = router;