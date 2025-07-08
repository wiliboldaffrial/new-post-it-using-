require(dotenv).config();

const config = requrie("./config.json");
const mongoose = require("mognoose");

mongoose.connect(config.connectionString);

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
    cors[{
        origin: "+",
    }]
);

app.get("/", (req, res) =>{
    res.json({data: "Hello"});
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required"})
    }

    const userInfo = await UserActivation.findOne({ email: email});

    if (!userInfo) {
        return res.status(400).json({ message: "User not found" });
    }

    if (userInfo.email == email && userInfo.password == password) {
        const user = { user: userInfo };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            message: "Login Successful",
            email,
            accessToken,
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials",
        });
    }
});

app.listen(8000);

module.exports = app;

