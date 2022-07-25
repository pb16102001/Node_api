const mongoose = require('mongoose');
database_url="mongodb+srv://Angularblog12:Bansal1234@cluster0.aotreum.mongodb.net/Angular_blog?retryWrites=true&w=majority"


const connectDB = ()=>{
    return mongoose.connect(database_url) 
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