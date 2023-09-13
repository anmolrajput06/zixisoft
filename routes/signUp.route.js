const express = require('express');
const route = express.Router(); // Create a new router instance
const sing = require('../controllers/auth/signUp');
const login= require('../controllers/auth/login')
const  exists = require('../middleware/userexists')
route.get('/get/users', sing.getuser);
route.post('/add/user',exists.checkIfUserExists, sing.signUp);
route.post('/delete/user',sing.deleteuser)
route.post('/update/user',sing.updateuser)
route.post('/login',login.login)

module.exports = route;
