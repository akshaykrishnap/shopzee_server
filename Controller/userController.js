
const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')


exports.registerController = async (req, res) => {
   const { username, email, password } = req.body
   console.log(username, email, password);
   try {
      const existingUsers = await users.findOne({ email })
      if (existingUsers) {
         res.status(406).json(`Account Already Exist`)
      } else {
         const newUser = new users({
            username, email, password
         })
         await newUser.save()
         res.status(200).json(newUser)
      }


   } catch (error) {
      res.status(401).json(`Request failed du to ${error}`)
   }
}


exports.loginController = async (req, res) => {
   const { email, password } = req.body
   console.log(email, password);

   try {

      const existingUser = await users.findOne({email,password})

      if (existingUser) { 
         const token = jwt.sign({ userId: existingUser._id },'secretkey') 
         res.status(200).json({existingUser,token})
      }
      else{
         res.status(406).json('Invalid Email ID or Password')
      }



   } catch (error) {
      res.status(200).json(`Request dailed ${error}`)
   }

}