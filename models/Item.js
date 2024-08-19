const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    taxApplicability: { type: Boolean },
    tax: { type: Number },
    baseAmount: { type: Number, required: true },
    discount: { type: Number },
    totalAmount: { type: Number }
});

module.exports = mongoose.model('Item', ItemSchema);
