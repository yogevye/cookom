const mongoose = require('mongoose');

const {UserSchema} = require('@cookom/common-mongo-db').Schemas;
const {addUserSchemaHooks} = require('./user-model.hooks');
const {addUserSchemaMethods} = require('./user-model.methods');
const {addUserSchemaStatics} = require('./user-model.statics');

const schema  = UserSchema.schema;
addUserSchemaHooks(schema);
addUserSchemaMethods(schema);
const UserModel = mongoose.model(UserSchema.tableName, schema);
addUserSchemaStatics(schema, UserModel);

module.exports = UserModel;