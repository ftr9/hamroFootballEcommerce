const express = require("express");
const passport = require("passport");
const router = express.Router();

const checkURL = require("../utils/checkURL");

router.get("/login", passport.authenticate("google", { scope: ['email', 'profile'] }));
router.get("/callback", passport.authenticate("google"), (req, res) => {
    res.redirect(checkURL());
})
router.get("/logout", (req, res) => {
    req.logout();
    res.send(false)
})


module.exports = router;