const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();


router.post('/', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.get('/', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.post('/group', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.put('/rename', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.put('/groupremove', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})
router.put('/groupadd', protect, async (req, res) => {
    try {

    }
    catch (err) {
        res.status(500).json(err);
    }
})












module.exports = router