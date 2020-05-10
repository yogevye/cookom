const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user-model');

const expiryDelta = process.env.AUTH_EXPIRY_DELTA || (24 *60 * 60 * 1000);


const validateToken = (token) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY);
    if(!tokenData || !data.creationTime || new Date().getTime() > (tokenData.creationTime + expiryDelta)){
        throw new Error(`token expired. userId: ${tokenData.id}`);
    }
    return {tokenData};
};

const validateUser = async (tokenData, token) =>{
    const user = await UserModel.findOne({ _id: tokenData.id, 'tokens.token': token });
    if (!user) {
        throw new Error('user does not exist')
    }
    return user;
};

module.exports = {validateToken, validateUser};