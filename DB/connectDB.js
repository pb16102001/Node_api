const mongoose = require('mongoose');


const connectDB = ()=>{
    return mongoose.connect(process.env.DB_URL) 
    .then(()=>{
        console.log('Connection successfully,jai ho Vikas sir💦💦💦💦💦 ')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports={
    connectDB
}