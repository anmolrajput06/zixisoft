const express = require('express');
const route = express.Router(); // Create a new router instance
const task = require('../controllers/task.controller');
const {verifyToken} = require('../middleware/verifyToken')
route.get('/get/task', task.gettask);
route.post('/add/task', task.addtask);
route.post('/delete/task',task.deletetask)
route.post('/update/task',task.updatetask)
route.post('/start/task',task.starttask)
route.post('/task_status',task.updatetaskStatus)

module.exports = route;
