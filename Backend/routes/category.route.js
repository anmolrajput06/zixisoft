const express = require('express');
const multer = require('multer')
const fs = require('fs');

const route = express.Router(); // Create a new router instance
const category = require('../controllers/category.controller');
const { verifyToken } = require('../middleware/verifyToken')

const { singleUpload } = require('../middleware/multer')

route.get('/get/category', category.getcategory);
route.post('/add/category', singleUpload, category.addcategory);
route.post('/delete/category', category.deletecategory)
route.post('/update/category', category.updatecategory)
route.post('/getCategoryById', category.getcategoryById)

module.exports = route;