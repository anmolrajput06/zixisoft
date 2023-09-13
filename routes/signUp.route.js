const express = require('express');
const route = express.Router(); // Create a new router instance
const sing = require('../controllers/auth/signUp');
const  exists = require('../middleware/userexists')
route.get('/get/users', sing.getuser);
route.post('/add/user',exists.checkIfUserExists, sing.signUp);
// route.post('/delete/task',task.deletetask)
// route.post('/update/task',task.updatetask)

module.exports = route;
