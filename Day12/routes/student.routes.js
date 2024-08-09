const express = require('express');

const { createStudent, getAllStudents, updateStudent, deleteStudent, getSingleStudent } = require('../controllers/student.controller');

const studentRouter = express.Router();

studentRouter.get('/', getAllStudents)
studentRouter.post('/', createStudent)
studentRouter.patch('/:id', updateStudent)
studentRouter.delete('/:id', deleteStudent)

studentRouter.get('/search', getSingleStudent)
//http://localhost/student/search?name=abc,city=mohali

module.exports = studentRouter