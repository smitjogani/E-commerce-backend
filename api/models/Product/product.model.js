const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    discountedPrice: {
        type: Number
    },
    discountedPersent: {
        type: Number
    },
    quantity: {
        type: number,
        required: true
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    sizes: [{
        name: { type: String },
        quantity: { type: Number }
    }],
    image: { type: String },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;