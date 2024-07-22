const mongoose = require('mongoose')


const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log(`Mongoose Is Connected`);
}).catch((err)=>{
  console.log(`Mongoose Is Connection Failed due ${err}`);
})