const mongoose = require('mongoose')

const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/users')
        console.log("database connected")
    }
    catch (error) {
        console.log(error)
    }
}

const studentSchema = mongoose.Schema({
    rollno: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    city: String
})

const StudentModel = mongoose.model('student', studentSchema)


module.exports = {
    main,
    StudentModel
}