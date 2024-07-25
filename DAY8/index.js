const express = require('express')
const { studentRouter } = require('./routes/router.student')
const { teacherRouter } = require('./routes/router.teacher')
const app = express();

app.use('/student', studentRouter)
app.use('/teacher', teacherRouter)
app.get('/', (req, res) => {
    res.send('This is the Home page')
})


app.listen(3500);