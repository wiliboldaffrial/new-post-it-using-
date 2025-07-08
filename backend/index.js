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

app.listen(8000);

module.exports = app;

