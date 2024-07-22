const mongoose = require('mongoose')

const produtSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
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
       rate:{ type: String,
        required: true
    }, count: {
        type: String,
        required: true
    }

    }
   


})


const products = mongoose.model('products', produtSchema)

module.exports = products
