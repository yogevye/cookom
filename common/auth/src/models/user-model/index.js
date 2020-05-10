const mongoose = require('mongoose');

const {UserSchema} = require('@cookom/common-mongo-db').Schemas;
const {addUserSchemaHooks} = require('./user-model.hooks');
const {addUserSchemaMethods} = require('./user-model.methods');
const {addUserSchemaStatics} = require('./user-model.statics');

addUserSchemaHooks(UserSchema);
addUserSchemaMethods(UserSchema);
const UserModel = mongoose.model('User', UserSchema);
addUserSchemaStatics(UserSchema, UserModel);

module.exports = UserModel;