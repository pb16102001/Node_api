const blogModel = require("../models/Blog")

class BlogController{

    static getall = async(req,res)=>{
        try{
           // res.header("Access-Control-Allow-Origin","*")
            const result = await blogModel.find()
            res.status(200).json({
                //message:"routing is working fine"
                success:true,
                result
             
            })
            //console.log(result)
            res.send(result)
        }catch(err){
            console.log(err);
        }
    }


    static bloginsert = async(req,res)=>{
        console.log(req.body);
        try{
            const {title,description,body}=req.body

            const result=new blogModel({
                title:title,
                description:description,
                body:body
            })

            //save data
           const result1= await result.save()
           res.send(result1)
        
        }
        catch(error){
            console.log(error);
            
        }
    }
    // static display = async (req, res) => {
    //     try{
    //         const {_id} = req.user;
    //         const result = await blogModel.find({user_id:_id})
    //     //console.log(result);
    //     res.render('', { data1:result})
    // }catch(error){
    //     console.log(err);
    // }
    
    // }
}

module.exports=BlogController