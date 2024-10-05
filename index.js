const { connect } = require('./connect');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const productRoutes = require('./routers/router');
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Cung cấp tĩnh folder uploads

// Kết nối MongoDB
connect();

app.use('/products', productRoutes);

// Khởi động server
app.listen(3000, () => {
    console.log('Server đang chạy trên http://localhost:3000');
});
