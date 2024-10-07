const express = require('express');
const router = express.Router();
const productController = require('../controller/controller');
const multer = require('multer');
const fs = require('fs');

// Cấu hình multer để lưu file ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Routes cho sản phẩm
router.get('/add', productController.getAddProduct);
router.get('/getall', productController.getAllProduct);
router.post('/', upload.single('image_product'), productController.postAddProduct);

module.exports = router;
