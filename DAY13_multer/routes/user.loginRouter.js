const express = require('express');
const userLogin = require('../controllers/user.loginController');

const loginRouter = express.Router()
loginRouter.post('/', userLogin);

module.exports = { loginRouter }