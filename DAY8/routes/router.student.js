const express = require('express')
const fs = require('fs')
const students = require('../data/student.json')
const studentRouter = express.Router();

studentRouter.get('/api', (req, res) => {
    res.json(students)
})
studentRouter.get('/api/:id', (req, res) => {
    const studentId = req.params.id
    const student = students.find((std) => std.id == studentId)
    res.json(student)
})
studentRouter.post('/api', (req, res) => {
    res.send('create new student')
})
module.exports = {
    studentRouter
}