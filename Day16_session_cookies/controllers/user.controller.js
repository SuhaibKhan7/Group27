const express = require('express')
const User = require('../models/adduser.model')

const addUser = async (req, res) => {

    const { username, email, password } = req.body
    const profileimage = req.file

    try {
        const user = await User({ username, email, password, profileimage })
        await user.save()
        req.session.message = "User Added Sucessfully"
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }

}
module.exports = addUser