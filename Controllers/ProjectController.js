const projectModel = require("../models/project")

class ProjectController{

    static projectall = async (req, res) => {
        try {
            res.header("Access-Control-Allow-Origin", "*")
            const projectall = await projectModel.find()
            res.status(200).json({
                //message:"TOuting is working fine"
                success: true,
                projectall

            })
            
        } catch (err) {
            console.log(err);
        }
    }
    static projectinsert = async(req,res)=>{
        //console.log(req.body)
        try{
            res.header("Access-Control-Allow-Origin", "*")
            const project = await projectModel.create(req.body)

            res.status(201).json({
                success:true,
                project
            })
        }catch(error){
            console.log(error)
        }

    }

}

module.exports=ProjectController