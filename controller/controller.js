const Product = require('../Model/product');
// const fs = require('fs');
// const path = require('path');

// Hiển thị form thêm sản phẩm
exports.getAddProduct = (req, res) => {
    res.render('addProduct'); // render view addProduct.ejs
};

// Xử lý thêm sản phẩm
exports.postAddProduct = (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file;

    if (!image) {
        return res.send('Vui lòng tải lên một hình ảnh.');
    }

    // Tạo đối tượng sản phẩm mới
    const newProduct = new Product({
        name: name,
        price: price,
        description: description,
        imageUrl: '/uploads/' + image.filename // Lưu đường dẫn ảnh
    });

    // Lưu sản phẩm vào MongoDB
    newProduct.save()
        .then(() => {
            res.send('Thêm sản phẩm thành công! <a href="/products/add">Thêm sản phẩm khác</a>');
        })
        .catch(err => {
            res.send('Có lỗi xảy ra khi thêm sản phẩm!');
            console.log(err);
        });
};
