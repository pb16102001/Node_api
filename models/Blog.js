const mongoose = require('mongoose');


const newSchema =new mongoose.Schema({
    title: {type:String, 
        required: true,
    },

	description: {
        type:String, 
        required: true,
        },

    body: {
        type:String, 
        required: true
    },
    
    pimage:   //array mai rakhege bahut sari image
    {
        public_id: {
            type: String,
            //required: true,
        },
        url: {
            type: String,
            //required: true,
        },
    },
     
    
    
},{timestamps:true});


 
var blogModel = mongoose.model('blog', newSchema);
module.exports=blogModel;