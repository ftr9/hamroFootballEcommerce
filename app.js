const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>hello hamro football .com</h1>`);
})

module.exports = app;