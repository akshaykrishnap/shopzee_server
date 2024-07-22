const mywishlists = require("../Models/wishListModel");

exports.addWishListController= async(req,res)=>{
    const userId = req.payload
    console.log(userId);

    const {id,title,price,description,category,image,rating} = req.body



    try {
       
        const existingProduct = await mywishlists.findOne({id,userId})
        if (existingProduct) {
            res.status(406).json('Product Already in Your Wishlist') 
        } else {
           const newProduct = new mywishlists({
            id,title,price,description,category,image,rating,userId 
           }) 
           await newProduct.save()
           res.status(200).json(newProduct)

        }

        
    } catch (error) {
       res.status(401).json(`Request has been failed ${error}`)
    }



    
}


exports.getWishListController = async(req,res)=>{
    const userId=req.payload
    console.log(userId);


    try {
        const wishlistItems= await mywishlists.find({userId})
        res.status(200).json(wishlistItems)
        
    } catch (error) {
        res.status(401).json(error)
    }
}


exports.removeWishListItems = async(req,res)=>{
const {id}= req.params
console.log(id);


    try {

        const removeItems= await mywishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeItems)
    } catch (error) {
        res.status(401).json(error)
    }

}