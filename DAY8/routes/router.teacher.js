const express = require('express');

const teacherRouter = express.Router();

teacherRouter.get('/', (req, res) => {
    res.send('teacher Data')
})
teacherRouter.post('/', (req, res) => {
    res.send('create new teacher data')
})
module.exports = {
    teacherRouter
}