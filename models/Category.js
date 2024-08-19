const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    taxApplicability: { type: Boolean, default: false },
    tax: { type: Number },
    taxType: { type: String }
});

module.exports = mongoose.model('Category', CategorySchema);
