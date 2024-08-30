require('dotenv').config()
const main = require('./db')
const express = require('express')
const session = require('express-session')
const Filestore = require('session-file-store')(session)
const loginrouter = require('./routes/loginrouter')
const router = require('./routes/routes')


let ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs')

app.use(session({
    // store: new FileStore(),
    secret: process.env.SESSIONKEY,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));


app.use('/adduser', router)

app.use('/login', loginrouter)


app.get('/', (req, res) => {
    res.render('index', { title: "Home Page" })
})









const port = process.env.PORT
app.listen(port, () => {
    main();
    console.log(`server is running at http://localhost:${port}`)
})
