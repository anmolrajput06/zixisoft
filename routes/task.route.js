const express = require('express');
const route = express.Router(); // Create a new router instance
const task = require('../controllers/task.controller');
const {verifyToken} = require('../middleware/verifyToken')
route.get('/get/task', task.gettask);
route.post('/add/task', task.addtask);
route.post('/delete/task',task.deletetask)
route.post('/update/task',task.updatetask)

module.exports = route;
