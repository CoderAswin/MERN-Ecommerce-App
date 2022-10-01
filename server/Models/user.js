const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    userInfo : {
        firstName: {
            type: String
        },

        lastName: {
            type: String
        }, 

        phoneNumber: {
            type: Number
        },
        
        gender:{
            type: String
        }
    },

    address: {
        addressOne: {
            type: String
        },
        addressTwo: {
            type: String
        },

        city: {
            type: String
        },

        state: {
            type: String
        },

        zip: {
            type: Number
        }
        
    }


})

const UserDetails = mongoose.model("User" , userSchema)

module.exports = UserDetails
