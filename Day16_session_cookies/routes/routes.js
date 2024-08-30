const express = require('express')
const uploads = require('../middleware/upload.middleware')
const addUser = require('../controllers/user.controller')
const router = express.Router()


router.post('/', uploads, addUser)
router.get('/', (req, res) => {
    res.render('adduser', {
        title: "Add user"
    })
})


module.exports = router
