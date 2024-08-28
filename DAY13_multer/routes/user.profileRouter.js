const express = require('express');
const userProfile = require('../controllers/user.profileController');
const { jwtVerify } = require('../middlewares/jwt');


const profileRouter = express.Router()
profileRouter.get('/', jwtVerify, userProfile);

module.exports = { profileRouter }