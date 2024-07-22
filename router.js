const express = require('express')
const userController = require('./Controller/userController')
const productController = require('./Controller/productController')
const jwtMiddleware = require('./Middleware/lwtMiddleware')
const wishListController = require('./Controller/wishListController')
const cartsController = require('./Controller/cartController')

const router = new express.Router()

// all products
router.get('/all-product',productController.allProductsController)


// register to get all register
router.post('/user/register',userController.registerController)


// login user
router.post('/user/login',userController.loginController)


// add to wishlist
router.post('/add-wishlist',jwtMiddleware,wishListController.addWishListController)


// get a product
router.get('/get-product/:id',productController.getAProductContoller)


// wishlist page
router.get('/wishlist/allproduct',jwtMiddleware,wishListController.getWishListController)


// delete wishlist page
router.delete('/remove-wishlistItem/:id',jwtMiddleware,wishListController.removeWishListItems)


// add to  carts page
router.post('/add-cart',jwtMiddleware,cartsController.addTOCartController)


// path to get all products from cart
router.get('/cart/all-products',jwtMiddleware,cartsController.getAllItemsCart)


// path to delete cart items
router.delete('/cart/remove-item/:id',jwtMiddleware,cartsController.removeCartItem)


// path to empty the cart 
router.delete('/empty-cart',jwtMiddleware,cartsController.emptyCart)

// path to increment product
router.get('/cart/increment/:id',jwtMiddleware,cartsController.increamentProductController)

// path to increment product
router.get('/cart/increment/:id',jwtMiddleware,cartsController.decreamentProductController)




module.exports = router 