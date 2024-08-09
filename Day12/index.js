const express = require('express')
const main = require('./db');
const studentRouter = require('./routes/student.routes');
require('dotenv').config()
const port = process.env.PORT
const app = express();

app.use(express.json())

app.use('/student', studentRouter)

app.get('/', (req, res) => {
    res.send('This is Home Page')
})

app.listen(port, async () => {
    await main();
    console.log('server Started')
})