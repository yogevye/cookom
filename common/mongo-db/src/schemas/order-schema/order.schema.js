import {Schema} from 'mongoose';

const OrderSchema = new Schema({
    orderTime: Date,
    paidTime: Date,
    receivedTime: Date,
    cost: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [ORDER_STATUS.CREATED, ORDER_STATUS.PAID, ORDER_STATUS.RECEIVED]
    },
});

module.exports = {tableName: 'order', schema: OrderSchema};