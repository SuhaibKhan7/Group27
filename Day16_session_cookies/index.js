require('dotenv').config()
const express = require('express')
const session = require('express-session')
const Filestore = require('session-file-store')(session)
let ejs = require('ejs')
const app = express();


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: "Home Page" })
})
app.get('/adduser', (req, res) => {
    res.render('adduser', { title: "Add user" })
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
