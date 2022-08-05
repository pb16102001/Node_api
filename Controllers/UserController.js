const UserModel = require("../models/User");
const bcrypt = require('bcrypt')

class UserController{

    
    static user_registration = async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*")
        const { name, email, password, password_confirmation } = req.body;
        const user = await UserModel.findOne({ email: email })
        if (user) {
            // req.flash('error', 'this email already exits')
            res.send({ status: "failed", message: "Email already exists" });
        }
        else {
            if (name && email && password && password_confirmation) {
                if (password === password_confirmation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const result = new UserModel({
                            name: name,
                            email: email,
                            password: hashPassword
                        })
                        await result.save()
                        res
                            .status(201)
                            .send({ status: "success", message: "Registration Success" });
                    } catch (error) {

                    }
                }
                else {
                    res
                        .status(500)
                        .send({ status: "failed", message: "password and confirm password does not match" });
                    //req.flash('error', 'password and confirm password does not match')

                }

            }
            else {
                res
                    .status(500)
                    .send({ status: "failed", message: "fill all requirements" });




            }
        }
    }

}

module.exports=UserController