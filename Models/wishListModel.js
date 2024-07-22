
const mongoose = require('mongoose')

const wishListSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: String,
            required: true
        }, count: {
            type: String,
            required: true
        }
    },
    userId: {
        type: String,
        required: true
    }
})


const mywishlists = mongoose.model("mywishlists", wishListSchema)
module.exports =mywishlists
