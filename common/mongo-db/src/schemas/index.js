const MealOrdersSchema = require('common/mongo-db/src/schemas/meal-orders-history');
const MealSchema = require('common/mongo-db/src/schemas/meal-schema');
const OrderSchema = require('common/mongo-db/src/schemas/order-schema');
const UserSchema = require('common/mongo-db/src/schemas/user-schema');

module.exports = {MealOrdersSchema, MealSchema, OrderSchema, UserSchema};