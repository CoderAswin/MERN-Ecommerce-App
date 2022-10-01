const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    image: {
        type: String
    },
    model: {
        type: String
    },
    size: {
        type:String
    },
    quantity: {
        type: Number
    },
    price : {
        type: String
    },
    name:{
        type: String
    },
    total: {
        type: String
    }

})

const cart = mongoose.model("cart" , cartSchema)

module.exports = cart