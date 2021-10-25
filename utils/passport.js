const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const userModel = require("../models/usermodels/usermodel");

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await userModel.findById(id);
        done(null, user);
    } catch (err) {
        console.log(err);
    }
})


passport.use(new googleStrategy({
    clientID: process.env.NODE_ENV === 'development' ? process.env.GOOGLE_CLIENTID : process.env.PRODUCTION_GOOGLE_CLIENTID,
    clientSecret: process.env.NODE_ENV === 'development' ? process.env.GOOGLE_CLIENTSECRET : process.env.PRODUCTION_GOOGLE_CLIENTSECRET,
    callbackURL: process.env.NODE_ENV === 'development' ? process.env.GOOGLE_CALLBACKURI : process.env.PRODUCTION_GOOGLECALLBACKURI
}, async function (accesstoken, refreshtoken, profile, done) {

    let userDB = await userModel.findOne({ email: profile.emails[0].value });
    if (userDB) {
        done(null, userDB);
    } else {

        const userNew = await userModel.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            imageUrl: profile.photos[0].value,
        });
        done(null, userNew);
    }

}))

