require('dotenv').config()

const express = require('express')

const cors = require('cors')
const router = require('./router')
require('./Connection/connection')


const shopKartServer =express()

shopKartServer.use(cors())
shopKartServer.use(express.json())
shopKartServer.use(router)

const PORT = 3000 || process.env.PORT

shopKartServer.listen(PORT,()=>{
    console.log(`Shop-Kart Sever is running Succefully at PORT: ${PORT}`);
})