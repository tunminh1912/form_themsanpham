const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/productsDB')
        console.log('Kết nối MongoDB thành công!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connect};