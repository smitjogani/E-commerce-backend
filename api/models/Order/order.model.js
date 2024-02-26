const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderitems',
    }],
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    deliveryDate: {
        type: Date,
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses'
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
            default: "online"
        },
        transitionId: {
            type: String
        },
        paymentId: {
            type: String
        },
        paymentStatus: {
            type: String,
            default: "Pending"
        }
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    orderstatus: {
        type: String,
        required: true,
        default: "Pending"
    },
    totalItem: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;