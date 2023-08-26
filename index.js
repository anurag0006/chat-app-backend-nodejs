const express = require('express');
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser")


const app = express();

app.use(express.json());
dotenv.config();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome to the Api!");
});

app.use("/api/users", userRoute);



connectToDB();


app.listen(process.env.PORT || 8000, () => {
    console.log("Backend Server Listening on 8000");
});
