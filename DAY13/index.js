const express = require('express')
const main = require('./db');
const { singupRouter } = require('./routes/user.singuprouter');
const { loginRouter } = require('./routes/user.loginRouter');
const { profileRouter } = require('./routes/user.profileRouter');
const multer = require('multer')




const app = express();

// app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/signup', singupRouter)
app.use('/login', loginRouter)
app.use('/profile', profileRouter)

app.get('/', (req, res) => {
    res.send('Home page')
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}'-' ${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


app.post('/uploads', upload.single('proficPic'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    res.send("File received")
})


app.listen(4000, () => {
    main();
})