const {validateToken, validateUser} = require('./user-auth-middleware-helpers');

const authAndValidateUserMiddleware = async(req, res, next) => {
    try {
        const token = validateToken(req.header('Authorization').replace('Bearer ', ''));
        const tokenData = validateToken(token);
        const user = await validateUser(tokenData, token);
        req.user = user;
        req.tokenData = tokenData;
        req.token = token;
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }
};

const authMiddleware = async(req, res, next) => {
    try{
        const token = validateToken(req.header('Authorization').replace('Bearer ', ''));
        const tokenData = validateToken(token);
        req.tokenData = tokenData;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: error.message })
    }
};

module.exports = {authAndValidateUserMiddleware, authMiddleware};