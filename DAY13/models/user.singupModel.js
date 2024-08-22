const { default: mongoose } = require("mongoose");
let validator = require('validator');
const signupSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    pass: {
        type: String,
        require: true,
    },
    cpass: {
        type: String,
        require: true,
        validate: {
            validator: function (value) {
                return this.pass = cpass
            }
        }
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Not a valid email address"
        }
    }
})
const SignupModel = mongoose.model('users', signupSchema)
module.exports = SignupModel