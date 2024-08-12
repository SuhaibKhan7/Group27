const express = require('express')
const { createUser } = require('../controllers/user.singupController')
const singupRouter = express.Router()
singupRouter.post('/', createUser);

module.exports = { singupRouter }