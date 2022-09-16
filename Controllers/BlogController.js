const blogModel = require("../models/Blog")
const cloudinary = require('cloudinary').v2;
class BlogController {

    static getall = async (req, res) => {
        try {
            res.header("Access-Control-Allow-Origin", "*")
            const getall = await blogModel.find()
            res.status(200).json({
                //message:"TOuting is working fine"
                success: true,
                getall

            })
            //console.log(getall)
            //res.send(getall)
        } catch (err) {
            console.log(err);
        }
    }


    static bloginsert = async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*")
        const file =req.files.pimage;
        //console.log(file)

        const myimage = await cloudinary.uploader.upload(file.tempFilePath,{
            folder:"blog_Profile",
            width:150,
        })
        console.log(myimage)
        console.log(req.body);
        try {
            const { title, description, body } = req.body

            const result = new blogModel({
                title: title,
                description: description,
                body: body,
                pimage:{
                    public_id:myimage.public_id,
                    url:myimage.secure_url,
                }
            })

            //save data
            const result1 = await result.save()
            res.send(result1)

        }
        catch (error) {
            console.log(error);

        }
    }

    static blogview = async (req, res) => {
        
        console.log(req.params.id);
        try {
            res.header("Access-Control-Allow-Origin", "*")
            const blog = await blogModel.findById(req.params.id)
            res.status(200).json({
                //message:"Routing is working fine"
                success: true,
                blog

            })
        

        } catch (error) {
            console.log(error);
        }

    }


    static updateblog = async (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
       
        try {
            //res.header("Access-Control-Allow-Origin", "*")
            const getall = await blogModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(getall)

            res.status(200).json({
                //message:"routing is working fine"
                success: true,
                getall

            })
            //console.log(getall)
            //res.send(getall)
        } catch (err) {
            console.log(err);
        }

    }
    
    static deleteblog = async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*")

        try {
            const blog = await blogModel.findByIdAndDelete(req.params.id,req.body)
            if (!blog) {
               return res
                .status(500)
                .send({ status: "unsuccess", message: "Blog Not Found" });
            }
            await blogModel.remove(blog)
            res
                .status(200)
                .send({ status: "success", message: "Blog Delete Success" });
        }
        catch (error) {
            console.log(error);
        }
    }


    
}

module.exports = BlogController


