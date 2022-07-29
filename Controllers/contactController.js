const contactModel = require("../models/Contact")

class contactController{

    static contactall = async (req, res) => {
        try {
            //res.header("Access-Control-Allow-Origin", "*")
            const contactall = await contactModel.find()
            res.status(200).json({
                //message:"TOuting is working fine"
                success: true,
                contactall

            })
            //console.log(contactall)
            //res.send(contactall)
        } catch (err) {
            console.log(err);
        }
    }

    static contactinsert =async(req,res)=>{
        //console.log(req.body)
        try{
            res.header("Access-Control-Allow-Origin", "*")
            const contact = await contactModel.create(req.body)

            res.status(200).json({
                success:true,
                contact
            })
        }catch(error){
            console.log(error)
        }
    }

}

module.exports=contactController