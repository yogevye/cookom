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
    location: PointLocationSchema,
    cost: {
        type: Number,
        required: true
    },
    totalProfit: {
        type: Number,
        required: true
    },
    CreationTime: {
        type: Date,
        required: true
    },
    activeOrders: {
        type: MealOrdersSchema,
    },
    MealOrdersHistory: {
        type: ObjectId
    }
});

module.exports = MealSchema;