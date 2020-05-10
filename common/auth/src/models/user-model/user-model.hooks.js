const bcrypt = require('bcryptjs');

const addUserSchemaHooks = (userSchema) => {
    userSchema.pre('save', async function (next) {
        // Hash the password before saving the user model
        const user = this;
        if(user.method !== 'local'){
            next();
        }

        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.local.password, 8)
        }
        next()
    });
};

module.exports = {addUserSchemaHooks};