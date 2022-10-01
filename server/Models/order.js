const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    totalItems : {
        type:Number
    },
    customerName: {
        type:String
    },
    phone: {
        type:Number
    },
    totalAmount: {
        type:Number
    },
    address:{
        type: String
    }
})

const Order = mongoose.model('Order' , orderSchema)

module.exports = Order