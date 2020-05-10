const bcrypt = require('bcryptjs');


const addUserSchemaStatics = (userSchema, User) => {
    userSchema.statics.findByCredentials = async (email, password) => {
        try{
            // Search for a user by email and password.
            const user = await User.findOne({ email} );
            if (!user) {
                throw new Error('email or password are invalid')
            }
            const isPasswordMatch = await bcrypt.compare(password, user.local.password);
            if (!isPasswordMatch) {
                throw new Error('email or password are invalid')
            }
            return user
        } catch (error) {
            throw new Error(`failed to find by credentials. email: ${email}, password: ${password}. error: ${error.message}`)
        }
    };

    userSchema.statics.findLocalUser = async (email) =>{
        return User.findOne({"local.email": email});
    };

    userSchema.statics.findIfGoogleUser = async (googleId) =>{
        return User.findOne({"google.id": googleId});
    };

    userSchema.statics.findIfFacebookUser = async (facebookId) =>{
        return User.findOne({"facebook.id": facebookId});
    };
};

module.exports = {addUserSchemaStatics};