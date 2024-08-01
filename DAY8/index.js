const express = require('express')
const fs = require('fs');
const students = require('./data/student.json')
const app = express();

// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is the Home page')
})
app.get('/api/student', (req, res) => {

    res.json(students)
})
app.get('/api/student/:id', (req, res) => {
    console.log(req.params)
    const _id = req.params.id
    const student = students.find((std) => std.id == _id)
    res.json(student);
})


app.post('/api/student', (req, res) => {
    const lastId = students[students.length - 1].id + 1;
    // const newStudent = {
    //     id: lastId,
    //     ...req.body
    // }
    const newStudent = Object.assign({ id: lastId }, req.body)
    students.push(newStudent)
    res.send(newStudent)
    console.log(students)

    fs.writeFile('./data/student.json', JSON.stringify(students), error => {
        if (error) {
            console.log(error)
        }
    })
})
app.patch('/api/student/:id', (req, res) => {
    const _id = req.params.id;
    const student = students.find((std) => std.id == _id);
    const index = students.indexOf(student)
    const updateStudent = Object.assign(student, req.body);
    students[index] = updateStudent
    fs.writeFile('./data/student.json', JSON.stringify(students), error => {
        if (error) {
            console.log(error)
        }
    })
    res.send('User Updated')
})
app.delete('/api/student/:id',(req,res)=>{
    const _id = req.params.id;
    const student = students.find((std) => std.id == _id);
    const index = students.indexOf(student)
    students.splice(index,1);
    fs.writeFile('./data/student.json', JSON.stringify(students), error => {
        if (error) {
            console.log(error)
        }
    })
    res.send('User Updated')

})







app.listen(3500);