const mongoose = require('mongoose');
const UserOrderMetadata = require('../../common/common-schemas/user-order-metadata.schema');

const UserSchema = mongoose.Schema({
    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    local: {
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String,
            minLength: 7
        },
    },
    google: {
        id: {
            type: String,
        },
        email: {
            type: String,
            lowercase: true
        }
    },
    facebook: {
        id: {
            type: String,
        },
        email: {
            type: String,
            lowercase: true
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    orders: {
        type: [UserOrderMetadata]
    },
    meals: {
        type: [ObjectId]
    }
});

module.exports = UserSchema;