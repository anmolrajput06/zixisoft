const express = require('express');
const route = express.Router(); // Create a new router instance
const {changepassword,resetpasswoed} = require('../controllers/password/changePassword')
const {verifyToken}= require('../middleware/verifyToken')

route.post('/changepassword',changepassword)
route.post('/resetpasswoed',resetpasswoed)

module.exports = route;