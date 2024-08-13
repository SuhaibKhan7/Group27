const express = require('express');
const userProfile = require('../controllers/user.profileController');


const profileRouter = express.Router()
profileRouter.get('/', userProfile);

module.exports = { profileRouter }