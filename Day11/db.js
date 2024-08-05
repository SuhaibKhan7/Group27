const mongoose = require('mongoose')
const main = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/student')
        console.log("database connected")
        // await StudentModel.insertMany([{
        //     rollno: '123',
        //     name: 1213,
        //     age: "twenty",
        //     married: false
        // }])
        const newstudent = new StudentModel({
            rollno: 232,
            name: "Vishal",
            age: 34,
            married: true
        })
        // const newstudent2 = new StudentModel({
        //     rollno: 4783,
        //     name: "Visl",
        //     age: 34,
        //     married: true
        // })
        // await newstudent2.save();
        await newstudent.save();


        console.log('Data Saved')
        mongoose.disconnect();
        console.log("Database Disconnect")

    } catch (error) {
        console.log(error)
        console.log('Database not connected')
    }
}

//schema
const studentSchema = mongoose.Schema({
    rollno: Number,
    name: String,
    age: Number,
    married: Boolean
}, {
    versionKey: false
})
//model
const StudentModel = mongoose.model('studentInfo', studentSchema)




main();