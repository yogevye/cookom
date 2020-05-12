const mongoose = require('mongoose');
const {MealSchema} = require('@cookom/common-mongo-db').Schemas;
const {addMealModelStatics} = require('./meal-model.statics');

const schema = MealSchema.schema;
const UserModel = mongoose.model(MealSchema.tableName, schema);
addMealModelStatics(schema, UserModel);

module.exports = UserModel;