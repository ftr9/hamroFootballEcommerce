const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan('short'));

const appRoute = require("./routes/appRoute");
app.use("/api/v1/hamrofootball", appRoute);


module.exports = app;