const express = require('express');
const app = express();
//middleware
let userlist = [];

app.use(express.json());
app.get('/', (req, res) => {
    res.send('This is the home page')
})
app.get('/profile', (req, res) => {
    res.send('This is the profile page')
})
app.get('/data', (req, res) => {
    console.log(userlist)
    res.send(userlist)
})
app.post('/data', (req, res) => {
    const { username, password } = req.body;
    userlist.push({ username, password })
    console.log(userlist);
    res.send('Data Received succesfully thankyou')
})
app.listen(3800);