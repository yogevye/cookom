const { Schema } = require('mongoose');
const MealOrderMetadata = require('./meal-order-metadata.schema');

const MealOrdersSchema = new Schema({
    openTime: {
        type: Date,
        required: true
    },
    closeTime: {
        type: Date
    },
    profit: {
        type: Number
    },
    orderLimit: {
        type: Number
    },
    orders: {
        type: [MealOrderMetadata]
    }
});

module.exports = MealOrdersSchema;