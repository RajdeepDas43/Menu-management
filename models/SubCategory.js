const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    taxApplicability: { type: Boolean },
    tax: { type: Number }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
