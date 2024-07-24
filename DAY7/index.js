const express = require('express')
const { permission } = require('./middlewares/middlware.permission')
const { timelogger } = require('./middlewares/middlware.timelogger')
const app = express();

//middleware
app.use(permission);
app.use(timelogger);


app.get('/', (req, res) => {
    res.send('This is home page for get')

})

app.get('/data', (req, res) => {
    res.send('This is the data page')
})
app.post('/data', (req, res) => {
    console.log(req.body)
    res.send('Data Received Thankyou')
})

app.listen(3500);