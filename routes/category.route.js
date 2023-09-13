const express = require('express');
const route = express.Router(); // Create a new router instance
const category = require('../controllers/category.controller');
const {verifyToken} = require('../middleware/verifyToken')
route.get('/get/category', category.getcategory);
route.post('/add/category', category.addcategory);
route.post('/delete/category',category.deletecategory)
route.post('/update/category',category.updatecategory)

module.exports = route;