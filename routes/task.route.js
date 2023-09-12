const express = require('express');
const route = express.Router(); // Create a new router instance
const task = require('../controllers/task.controller');

route.post('/add/task', task.addtask);
route.get('/get/task', task.gettask);
route.post('/delete/task',task.deletetask)
route.post('/update/task',task.updatetask)

module.exports = route;
