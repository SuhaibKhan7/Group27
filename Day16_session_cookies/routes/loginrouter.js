const express = require('express')
const uploads = require('../middleware/upload.middleware')
const loginrouter = express.Router()

loginrouter.get('/', (req, res) => {

    //load login page

    res.render('login', {
        title: "Login"
    })


})

module.exports = loginrouter
