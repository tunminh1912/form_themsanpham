const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
    category_id: Number,
    name_product: String,
    description: String,
    price: Number,
    quantity: Number,
    image_product: String,
});

module.exports = mongoose.model('Product', productSchema);