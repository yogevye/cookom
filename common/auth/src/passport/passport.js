const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const UserModel = require('../models/user-model');

const GOOGLE_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_AUTH_CLIENT_SECRET;

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_AUTH_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_AUTH_CLIENT_SECRET;

passport.use('localToken', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await UserModel.findByCredentials(email, password);
        if (!user) {
            return done(null, false, {message: 'Incorrect email or password.'});
        }
        const token = await user.generateAuthToken();
        return done(null, user, token);
    } catch (error) {
      return done(new Error(`Failed to login. error: ${error.message}`));
    }
}));

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: GOOGLE_CLIENT_ID,
     clientSecret: GOOGLE_CLIENT_SECRET
},  async (accessToken, refreshToken, profile, done) => {
    try{
        const existingUser = await UserModel.findIfGoogleUser(profile.id);
        if(existingUser){
            return done(null, existingUser)
        }

        const newUser = new UserModel({
            method: 'google',
            name: profile.displayName,
            photo: profile.photos && profile.photos.length > 0 && profile.photos[0] &&  profile.photos[0].value,
            google: {
                id: profile.id,
                email: profile.emails[0].value
            }
        });

        await newUser.save();
        done(null, newUser)
    } catch (error) {
        done(error, false, error.message)
    }
}));

passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET
},  async (accessToken, refreshToken, profile, done) => {
    try{
        const existingUser = await UserModel.findIfFacebookUser(profile.id);
        if(existingUser){
            return done(null, existingUser)
        }

        const newUser = new UserModel({
            method: 'facebook',
            name: profile.displayName,
            photo: profile.photos && profile.photos.length > 0 && profile.photos[0] &&  profile.photos[0].value,
            facebook: {
                id: profile.id,
                email: profile.emails[0].value
            }
        });

        await newUser.save();
        done(null, newUser)
    } catch (error) {
        done(error, false, error.message)
    }
}));