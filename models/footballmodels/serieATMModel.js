const mongoose = require("mongoose");
const serieATMSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    producedYear: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true
    },
    totalSold: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    }

})

module.exports = mongoose.model("serieATM", serieATMSchema);