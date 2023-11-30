const mongoose = require("mongoose")
const donutSchema = mongoose.Schema({
    donut_name: {
        type: String,
        required: true,
    },
    donut_price: {
        type: Number,
        required: true,
        min: 10,
        max: 99,
    },
    donut_store: {
        type: String,
        required: true,
    },
    donut_orderId: {
        type: Number,
        required: true,
        min: 0,
        max: 999,
    }
})
module.exports = mongoose.model("donut", donutSchema)