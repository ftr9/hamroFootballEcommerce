const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/login", passport.authenticate("google", { scope: ['email', 'profile'] }));
router.get("/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/userLog");
})
router.get("/logout", (req, res) => {
    req.logout();
})


module.exports = router;