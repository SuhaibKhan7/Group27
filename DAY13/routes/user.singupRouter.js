const express = require('express')
const { createUser } = require('../controllers/user.singupController');
const uploadPic = require('../middlewares/user.multer');
const singupRouter = express.Router()
singupRouter.post('/',uploadPic, createUser);

module.exports = { singupRouter }