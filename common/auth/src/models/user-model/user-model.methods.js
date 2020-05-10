const jwt = require('jsonwebtoken');

const addUserSchemaMethods = (userSchema) => {
    userSchema.methods.generateAuthToken = async function() {
        // Generate an auth token for the user
        const user = this;
        const token = jwt.sign({id: user._id, creationTime:new Date().getTime(), method: user.method, name: user.name}, process.env.JWT_KEY);
        user.tokens = user.tokens.concat({token});
        await user.save();
        return token
    };
};

module.exports = {addUserSchemaMethods};