
const express = require('express')
const session = require('express-session')
const Filestore = require('session-file-store')(session)

require('dotenv').config()
const app = express();

app.use(session({
    store: new Filestore,
    secret: process.env.SESSIONKEY,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60
    }
}))
app.get('/', (req, res) => {
    if (req.session.v) {
        req.session.v++
    }
    else {
        req.session.v = 1

    }
    res.send(`Total no of visitor ${req.session.v}`)
})
app.get('/login', (req, res) => {
    res.send(`This is login page visitor:${req.session.v}`)
})
app.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.log('unable to destroy session')
        }
        req.cookies = '';
        res.redirect('/')
    })

})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
