const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("DB connection successful");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = connectToDB