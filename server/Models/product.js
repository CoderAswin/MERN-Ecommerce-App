const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },

    description: {
        type: String,
    },

    price: {
        type: String,
    },

    model: {
        type: String
    },

    originalAmount: {
        type: String
    },

    off: {
        type: String
    },

    quantity:{
        type: String
    },

    images: {
        imgOne: String,
        imgTwo: String,
        imgThree: String,
        imgFour:String
    }



    // imgOne:{
    //     type:String
    // },
    // imgTwo:{
    //     type:String
    // },
    // imgThree:{
    //     type:String
    // },
    // imgFour:{
    //     type:String
    // }

})

const product = mongoose.model("product", productSchema)

module.exports = product