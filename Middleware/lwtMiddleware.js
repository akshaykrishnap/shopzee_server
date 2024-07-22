


const jwt=require('jsonwebtoken')


const jwtMiddleware = (req,res,next)=>{
    try {

        const token =  req.headers['authorization'].split(' ')[1]
        console.log(token);
        const jwtResponse = jwt.verify(token,'secretkey')
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()

        
    } catch (error) {
        res.status(401).json(`Authorization failed due to ${error}`)
    }
}

module.exports= jwtMiddleware