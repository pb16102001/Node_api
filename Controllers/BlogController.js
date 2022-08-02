const blogModel = require("../models/Blog")

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
        console.log(req.body);
        try {
            const { title, description, body } = req.body

            const result = new blogModel({
                title: title,
                description: description,
                body: body
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
        try {
            //res.header("Access-Control-Allow-Origin", "*")
            const data = await blogModel.findByIdAndUpdate(req.params.id, req.body)

            res.status(200).json({
                //message:"routing is working fine"
                success: true,
                data

            })
            //console.log(allproducts)
            //res.send(allproducts)
        } catch (err) {
            console.log(err);
        }

    }


    
}

module.exports = BlogController


