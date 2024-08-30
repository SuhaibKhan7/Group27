
//server static files
app.use(express.static('public'));

//initate session
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


app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});


const mongoose = require('mongoose')

const main = async (req, res) => {
    try {

        const connection = await mongoose.connect(process.env.DB_URI)
        console.log("Database Connected..")
    }
    catch (error) {
        console.log('Database not connected, Error 🤨 ' + error)
    }

}
module.exports = main



//inside .env file
PORT = 4000
DB_URI = 'mongodb://localhost:27017'
SESSIONKEY = "This is the Session Key"


//middleware
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

        unique: true
    },
    phone: {
        type: String,

    },
    profileImage: {
        type: String,
    },
    create: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;















//multer middleware

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const uploads = async (req, res, next) => {
    upload.single('profileImage')(req, res, function (error) {
        if (error) {
            console.log(error);
            return res.status(400).send({ error: error.message });
        }
        next();
    });
};

module.exports = uploads;


//handle locals
app.use((req, res, next) => {
    console.log("Session message before setting to locals:", req.session.user);
    res.locals.message = req.session.message;

    next();
});

//res.locals is an object in Express that allows you to pass variables from your middleware to your views or the next middleware in the stack.
//It's a useful way to share data between middleware functions and templates without polluting the global scope.
// How res.locals Works
// Scoped to the Request: The res.locals object is scoped to the individual request, meaning that the variables you set on res.locals will only be available for that specific request.Once the request is finished, the data in res.locals is discarded.
// Data Availability: Data set in res.locals is available to the views that are rendered and any subsequent middleware after the data is set.


//important realted to form
<form action="/adduser" method="POST" enctype="multipart/form-data"></form>