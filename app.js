const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config({ path: './config/keys.env' });

if (process.env.NODE_ENV === 'development') {
    const morgan = require("morgan");
    app.use(morgan('short'));
}

require("./utils/passport");
app.use(cookieSession({
    keys: [process.env.COOKIE_KEY],
    maxAge: 1000 * 60 * 60
}))
app.use(passport.initialize());
app.use(passport.session());



const appRoute = require("./routes/appRoute");
app.use("/api/v1/hamrofootball", appRoute);

app.get("/userLog", (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.send("the user is not logged in")
    }
})

const authRoute = require("./routes/authRoute");
app.use("/auth/google/", authRoute);

module.exports = app;