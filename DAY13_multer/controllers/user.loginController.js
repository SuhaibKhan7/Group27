const { jwtGenerate } = require("../middlewares/jwt");
const SignupModel = require("../models/user.singupModel");
const bcrypt = require('bcrypt')
const userLogin = async (req, res) => {
    const { email, pass } = req.body;
    console.log(req.body)
    const user = await SignupModel.find({ email: email })
    if (user.length > 0) {
        bcrypt.compare(pass, user[0].pass, function (err, result) {
            if (err) {
                res.send({ message: "Hash not generated", error: err })
            }
            else if (result) {
                //generate Token
                const token = jwtGenerate(user[0].name)
                console.log(token)
                res.send({ message: "Login Sucessfull", token: token })
            }
            else {
                res.send("Login failed")
            }
        });
    }
    else {
        res.status(404).send("user not found")
    }

}
module.exports = userLogin