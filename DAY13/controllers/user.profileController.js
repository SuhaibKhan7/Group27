const express = require('express')

const userProfile = async (req, res) => {
    if (req.user) {
        res.send({ profile: req.user, message: 'This is the data' })
    }
    else {
        res.send('Access Denied')
    }

}
module.exports = userProfile