const mongoose = require('mongoose');


const projectSchema =new mongoose.Schema({
    projectname: {type:String, 
        required: true,
    },

	technologies: {
        type:String, 
        required: true,
        },

    description: {
        type:String, 
        required: true
    },

    link: {
        type:String, 
        required: true
    },
     
    
    
},{timestamps:true});


 
var projectModel = mongoose.model('project', projectSchema);
module.exports=projectModel;