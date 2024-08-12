const express = require('express')
const main = require('./db');
const { singupRouter } = require('./routes/user.singuprouter');
const app = express();

app.use(express.json())
app.use('/signup', singupRouter)

app.get('/', (req, res) => {
    res.send('Home page')
})
app.listen(4000, () => {
    main();
})