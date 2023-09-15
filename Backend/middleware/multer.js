const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        try {
            cb(null, "/home/vedansh/Desktop/zixisoft/zixisoft/adminTryreact/public/uploads")
        } catch (e) {
            cb(e, false)
        }
    }, filename: function (req, file, cb) {
        const date = new Date();
        let d = date.getDate().toString();
        let m = date.getMonth() + 1;
        let y = date.getFullYear().toString();
        var currentDate = y + m + d;
        cb(null, file.fieldname + '_' + currentDate + '_' + Date.now() + '_' + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
});

var singleUpload = upload.fields([{ name: 'logo' }])
var multiplepUload = upload.fields([{ name: 'pan_upload' }, { name: 'coi_upload' }, { name: 'moa_upload' }, { name: 'aoa_upload' }, { name: 'gst_upload' }, { name: 'cheque_upload' }])

module.exports = { singleUpload, multiplepUload };