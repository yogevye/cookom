const { Schema } = require('mongoose');

const UserOrderMetadata = new Schema({
    mealId: {
        type: Date,
        required: true
    },
    mealPhoto: {
        type: Date,
        required: true
    },
    status: {
      type: String,
      enum: [ORDER_STATUS.CREATED, ORDER_STATUS.PAID, ORDER_STATUS.RECEIVED]
    },
    order: {
        type: ObjectId,
        required: true
    }
});

module.exports = UserOrderMetadata;