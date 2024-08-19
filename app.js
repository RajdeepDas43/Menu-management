const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categories');
const subCategoryRoutes = require('./routes/subCategories');
const itemRoutes = require('./routes/items');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/menuDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);
app.use('/items', itemRoutes);

// Global error handler
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Menu Management Server is running...');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
