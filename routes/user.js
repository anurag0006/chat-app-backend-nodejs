
const router = require("express").Router();



router.get("/", (req, res) => {
    try {
        res.status(200).json("Hello world");
    }
    catch (err) {
        res.status(500).json(err);
    }
})



module.exports = router;