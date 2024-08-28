const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}'-' ${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


const uploadPic = (req, res, next) => {

    
    upload.single('proficPic')(req, res, function (err) {
        if (err) {
            console.log(err)
        }
        console.log(req.body);
        console.log(req.file)
        next();
    })

    

}
module.exports = uploadPic