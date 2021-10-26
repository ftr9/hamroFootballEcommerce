const express = require("express");
const app = express();
const path = require('path');
const passport = require("passport");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config({ path: './config/keys.env' });

if (process.env.NODE_ENV === 'development') {
    const morgan = require("morgan");
    app.use(morgan('short'));
}

app.use(express.json());

require("./utils/passport");
app.use(cookieSession({
    keys: [process.env.COOKIE_KEY],
    maxAge: 1000 * 60 * 60
}))
app.use(passport.initialize());
app.use(passport.session());



const appRoute = require("./routes/appRoute");
app.use("/api/v1/hamrofootball", appRoute);

const authRoute = require("./routes/authRoute");
app.use("/auth/google/", authRoute);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join('client/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

module.exports = app;