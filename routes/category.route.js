const express = require('express');
const multer= require('multer')
const fs = require('fs');

const route = express.Router(); // Create a new router instance
const category = require('../controllers/category.controller');
const {verifyToken} = require('../middleware/verifyToken')
const uploadsFolder = './uploads'; // Specify the folder path
if (!fs.existsSync(uploadsFolder)) {
    fs.mkdirSync(uploadsFolder);
    console.log('Uploads folder created.');
}
const upload = multer({ dest: './uploads/' });

route.get('/get/category', category.getcategory);
route.post('/add/category',upload.single('file'), category.addcategory);
route.post('/delete/category',category.deletecategory)
route.post('/update/category',category.updatecategory)
route.post('/getCategoryById',category.getcategoryById)

module.exports = route;