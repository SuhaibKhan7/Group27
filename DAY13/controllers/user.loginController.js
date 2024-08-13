const SignupModel = require("../models/user.singupModel");
const bcrypt = require('bcrypt')
const userLogin = async (req, res) => {
    const { email, pass } = req.body;
    console.log(req.body)
    const user = await SignupModel.findOne({ email: email })
    if (user.length > 0) {
        bcrypt.compare(pass, user.pass, function (err, result) {
            if (err) {
                res.send({ message: "Hash not generated", error: err })
            }
            if (result) {
                res.send("Login Successfull")
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