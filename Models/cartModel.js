
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
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
    quantity: {
        type: Number,
        required: true
    },
    grandTotal: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})


const carts = mongoose.model("carts", cartSchema)
module.exports = carts