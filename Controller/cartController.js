const carts = require('../Models/cartModel')


exports.addTOCartController = async (req, res) => {
    console.log(`Inside Cart Controller`);

    const userId = req.payload
    console.log(userId);

    const { id, title, price, description, category, image, rating, quantity } = req.body

    try {

        const existingProduct = await carts.findOne({ id, userId })

        if (existingProduct) {

            /* res.status(406).json('Product Already in Our Cart') */

            existingProduct.quantity += 1

            existingProduct.grandTotal = existingProduct.quantity * existingProduct.price

            await existingProduct.save()

            res.status(201).json(existingProduct)
        }
        else {
            const newProduct = new carts({
                id, title, price, description, category, image, rating, quantity, grandTotal: price, userId
            })

            await newProduct.save()

            res.status(200).json(newProduct)
        }

    } catch (error) {
        res.status(401).json(`Request has been failed ${error}`)
    }

}


exports.getAllItemsCart = async (req, res) => {
    const userId = req.payload
    console.log(userId);


    try {
        const cartItems = await carts.find({ userId })
        res.status(200).json(cartItems)

    } catch (error) {
        res.status(401).json(error)
    }
}


exports.removeCartItem = async (req, res) => {
    const { id } = req.params
    console.log(id);


    try {

        const removeItems = await carts.deleteOne({ _id: id })
        res.status(200).json(`Cart Item is removed ${removeItems}`)

    } catch (error) {
        res.status(401).json(error)
    }

}

exports.emptyCart = async (req, res) => {

    const userId = req.payload
    console.log(userId);

    try {

        const removeItems = await carts.deleteMany({ userId })
        res.status(200).json(`Cart Item is removed ${removeItems}`)

    } catch (error) {
        res.status(401).json(error)
    }
}

exports.increamentProductController = async (req, res) => {
    const { id } = req.params

    try {

        const selectedItem = await carts.findOne({ _id: id })
        if (selectedItem) {
            selectedItem.quantity += 1
            selectedItem.grandTotal = selectedItem.price * selectedItem.quantity
            await selectedItem.save()
            res.status(200).json(selectedItem)

        } else {
            res.status(406).json(`No product exists `)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

exports.decreamentProductController = async (req, res) => {
    const { id } = req.params

    try {

        const selectedItem = await carts.findOne({ _id: id })
        if (selectedItem) {
            selectedItem.quantity -= 1

            if (selectedItem.quantity == 0) {
                await carts.deleteOne({ _id: id })
                res.status(200).json(`Item Removed`)
            }
            else {
                selectedItem.grandTotal = selectedItem.price * selectedItem.quantity
                await selectedItem.save()
                res.status(200).json(selectedItem)
            }


        } else {
            res.status(406).json(`No product exists `)
        }

    } catch (error) {
        res.status(401).json(error)
    }
}