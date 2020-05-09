const { Schema } = require('mongoose');
const MealOrdersSchema = require('../../common/common-schemas/meal-orders-schema');

const MealOrdersHistorySchema = new Schema({
    mealOrders: {
        type: [MealOrdersSchema],
    }
});

module.exports = MealOrdersSchema;