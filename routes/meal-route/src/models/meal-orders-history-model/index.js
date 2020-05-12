const mongoose = require('mongoose');
const {MealOrdersHistorySchema} = require('@cookom/common-mongo-db').Schemas;

const schema = MealOrdersHistorySchema.schema;
const MealOrdersHistoryModel = mongoose.model(MealOrdersHistorySchema.tableName, schema);

module.exports = MealOrdersHistoryModel;