const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    rollno: {
        type: String,
        required: true
    },
    name: String,
    email: String
})

const StudentModel = mongoose.model('studentlist', studentSchema)
module.exports = StudentModel