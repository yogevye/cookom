const { Schema } = require('mongoose');
const MealOrdersSchema = require('../../common/common-schemas/meal-orders.schema');
const PointLocationSchema = require('../../common/common-schemas/point-location.chema');

const MealSchema = new Schema({
    owners: [{
        type: [ObjectId],
        required: true
    }],
    photo: {
      type: String,
      required: true
    },
    location: {
        type: PointLocationSchema,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    totalProfit: {
        type: Number,
        required: true
    },
    creationTime: {
        type: Date,
        required: true
    },
    activeOrders: {
        type: MealOrdersSchema,
    },
    mealOrdersHistory: {
        type: ObjectId
    }
});

module.exports = {tableName: 'meal', schema: MealSchema};