const { Schema } = require('mongoose');

const MealOrderMetadata = new Schema({
    userId: {
        type: Date,
        required: true
    },
    userDisplayName: {
        type: Date,
        required: true
    },
    userDisplayPhoto: {
        type: Number
    },
    order: {
        type: ObjectId,
        required: true
    }
});

module.exports = MealOrderMetadata;