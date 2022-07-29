const mongoose = require('mongoose');


const contactSchema =new mongoose.Schema({
    name: {type:String, 
        required: true,
    },

	email: {
        type:String, 
        required: true,
        },

    mobile: {
        type:String, 
        required: true
    },

    message: {
        type:String, 
        required: true
    },
     
    
    
},{timestamps:true});


 
var contactModel = mongoose.model('contact', contactSchema);
module.exports=contactModel;