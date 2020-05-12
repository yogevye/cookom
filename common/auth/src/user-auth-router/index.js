const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const {authAndValidateUserMiddleware} = require('../middleware/user-auth-middleware');
const {login, signUp, logout, logoutAll} = require('./user-auth-handler/user-handler');

const UserAuthRouter = express.Router();

UserAuthRouter.use(bodyParser.json());
UserAuthRouter.use(bodyParser.urlencoded({extended: false}));

UserAuthRouter.post('/', signUp);

UserAuthRouter.get('/me', auth, async(req, res) => {
    // View logged in user profile
    res.send(req.tokenData)
});

UserAuthRouter.post('/logout', authAndValidateUserMiddleware(), logout);

UserAuthRouter.post('/logoutall', authAndValidateUserMiddleware(), logoutAll);

UserAuthRouter.route('/login')
    .post(passport.authenticate('localToken', {session: false}), login);

UserAuthRouter.route('/auth/google')
    .post(passport.authenticate('googleToken', {session: false}), login);

UserAuthRouter.route('/auth/facebook')
    .post(passport.authenticate('facebookToken', {session: false}), login);

module.exports = UserAuthRouter;