const Product = require('../Model/product');

// Hiển thị form thêm sản phẩm
exports.getAddProduct = (req, res) => {
    res.render('addProduct'); // render view addProduct.ejs
};

// Xử lý thêm sản phẩm
exports.postAddProduct = (req, res) => {
    const { category_id,name_product, description, price ,quantity} = req.body;
    const image_product = req.file;

    if (!image_product) {
        return res.send('Vui lòng tải lên một hình ảnh.');
    }

    // Tạo đối tượng sản phẩm mới
    const newProduct = new Product({
        category_id: category_id,
        name_product: name_product,
        description: description,
        price: price,
        quantity: quantity,
        image_product: '/uploads/' + image_product.filename // Lưu đường dẫn ảnh
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
