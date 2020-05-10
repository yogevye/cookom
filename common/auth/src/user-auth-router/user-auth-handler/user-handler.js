const UserModel = require('../../models/user-model');
const {ERROR_AUTH_USER_EXIST, ERROR_AUTH_INVALID_CREDENTIALS, ERROR_AUTH_GENERAL} = require('./error-types');

const login = async (req,res) => {
    try {
        const user = req.user;
        if (!user) {
            res.status(401).send({error: 'Login failed! Check authentication credentials', errorType: ERROR_AUTH_INVALID_CREDENTIALS})
        }
        const token = await user.generateAuthToken();
        res.send({ user, token })
    } catch (error) {
        res.status(400).send({error: `failed to login. error.message: ${error.message}`, errorType: ERROR_AUTH_GENERAL})
    }
};

const signUp = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findLocalUser(email);
        if(user){
            res.status(401).send({error: 'user already exist', errorType: ERROR_AUTH_USER_EXIST})
        }
        const newUser = new UserModel({
            method: 'local',
            name: name,
            local: {
                email: email,
                password: password
            }
        });
        await newUser.save();
        const token = await newUser.generateAuthToken();
        res.status(201).send({ newUser, token })
    } catch (error) {
        res.status(400).send({error: `failed to signUp. error.message: ${error.message}`, errorType: ERROR_AUTH_GENERAL})
    }
};

const logout = async (req,res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
};

const logoutAll = async (req,res) => {
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save();
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = {login, signUp, logout, logoutAll};