const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    orders: {
        type: Object,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'not seen'
    }
}, { timestamps: true })

module.exports = mongoose.model("orders", orderSchema);