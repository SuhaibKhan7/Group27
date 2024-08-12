const express = require('express');
const bcrypt = require('bcrypt')
const SignupModel = require('../models/user.singupModel');
const createUser = async (req, res) => {
    console.log(req.body)
    const { name, pass, cpass, email } = req.body;
    if (pass != cpass) {
        res.status(400).send('Password not same')
    }
    bcrypt.hash(pass, 10, async function (err, hash) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(hash)
            const user = new SignupModel({ name: name, pass: hash, email: email })
        try {
            await user.save();
            res.send('Data Received succesful')
        } catch (error) {
            console.log(error)
        }
    }
    });


}
module.exports = { createUser }