const express = require('express');
const dotenv = require("dotenv");
const userRoute = require('./routes/user');
const chatRoute = require('./routes/chat');
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser")
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome to the Api!");
});

app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);



connectToDB();


app.listen(process.env.PORT || 8000, () => {
    console.log("Backend Server Listening on 8000");
});
