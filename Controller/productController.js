const products = require('../Models/productModels')

exports.allProductsController = async(req,res)=>{
    console.log(`Inside All ProductController`);
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
        
    } catch (error) {
      res.status(401).json(error)  
    }
}


exports.getAProductContoller = async(req,res)=>{

  const {id} = req.params
  console.log(id);

  try {
    const product = await products.findOne({id:id})
    res.status(200).json(product)
  } catch (error) {
    res.status(401).json(error)
  }

}