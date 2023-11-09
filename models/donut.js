const mongoose = require("mongoose")
const donutSchema = mongoose.Schema({
    donut_name: String,
    donut_price: Number,
    donut_store: String
})
module.exports = mongoose.model("donut", donutSchema)