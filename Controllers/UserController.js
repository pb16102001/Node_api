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

    static user_login = async (req, res) => {
        // console.log(req.body)

        try {
            const { email, password } = req.body
            if (email && password) {
                const user = await UserModel.findOne({ email: email })
                //console.log(user);
                if (user!= null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if (user.email == email && isMatch) {
                        if(user.role=="user"){
                        //console.log(save_user)
                        //generate jwt token
                        //const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                        res
                        // .status(201)
                        .send({ status: "success", message: "Login Success","Token":token });
                        }
                    } else {
                        res.send({ status: "failed", message: "email and password  not match" });

                    }
                } else {
                    res.send({ status: "failed", message: "you are not a registered user" });

                }
            }

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports=UserController