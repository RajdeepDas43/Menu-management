const Category = require('../models/Category');
const createError = require('http-errors');

exports.createCategory = async (req, res, next) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).send(newCategory);
    } catch (error) {
        next(createError(400, error.message));
    }
};

exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.getCategoryById = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return next(createError(404, 'Category not found'));
        }
        res.send(category);
    } catch (error) {
        next(createError(500, error.message));
    }
};

exports.updateCategory = async (req, res, next) => {
    const updates = Object.keys(req.body);
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return next(createError(404, 'Category not found'));
        }
        updates.forEach((update) => category[update] = req.body[update]);
        await category.save();
        res.send(category);
    } catch (error) {
        next(createError(400, error.message));
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return next(createError(404, 'Category not found'));
        }
        res.send(category);
    } catch (error) {
        next(createError(500, error.message));
    }
};
