const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    orders: {
        type: Object,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'not seen'
    }
})

module.exports = mongoose.model("orders", orderSchema);