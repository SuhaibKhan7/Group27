const express = require('express')
const main = require('./db');
const { singupRouter } = require('./routes/user.singuprouter');
const { loginRouter } = require('./routes/user.loginRouter');
const { profileRouter } = require('./routes/user.profileRouter');
const app = express();

// app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/signup', singupRouter)
app.use('/login', loginRouter)
app.use('/profile', profileRouter)

app.get('/', (req, res) => {
    res.send('Home page')
})
app.listen(4000, () => {
    main();
})