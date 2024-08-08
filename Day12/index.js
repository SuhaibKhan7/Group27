const express = require('express')
const main = require('./db');
const studentRouter = require('./routes/student.routes');
const app = express();

app.use('/student', studentRouter)

app.get('/', (req, res) => {
    res.send('This is Home Page')
})



app.listen(4000, async () => {
    await main();
    console.log('server Started')
})